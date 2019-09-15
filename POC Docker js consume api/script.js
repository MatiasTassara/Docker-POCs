

var from = 0;
var to = 10;

const getAllInPages = () => {
    fetch(`https://utn-2019-avanzada2-tp5.herokuapp.com/records?from=${from}&to=${to}`)
    .then(result =>{
        //console.log(result);
        return result.json();
    })
    .then(result =>{
        insertRows(result);
    })
    .catch(error => console.log(error));
};



document.getElementById('next-button').addEventListener('click',() =>{
    if(to < 100){
        from += 10;
        to +=10;
        document.querySelector('tbody').innerHTML = '';
        getAllInPages();
    }
});
document.getElementById('prev-button').addEventListener('click',() =>{
    if(from > 0){
        from -= 10;
        to -=10;
        document.querySelector('tbody').innerHTML = '';
        getAllInPages();
        
    }
});


const insertRows = (allUsers) => {

    allUsers.forEach(element => {
        
        const table = document.getElementById('table-body');
        const number = document.createElement('td');
        const firstName = document.createElement('td');
        const lastName = document.createElement('td');
        const eMail = document.createElement('td');
        const gender = document.createElement('td');
        const lastIp = document.createElement('td');
        const tr = document.createElement('tr');
        number.textContent = element.id;
        firstName.textContent = element.first_name;
        lastName.textContent = element.last_name;
        gender.textContent = element.gender;
        eMail.textContent = element.email;
        lastIp.textContent = element.last_connected_ip;
        table.appendChild(tr);
        tr.appendChild(number);
        tr.appendChild(firstName);
        tr.appendChild(lastName);
        tr.appendChild(gender);
        tr.appendChild(eMail);
        tr.appendChild(lastIp);
    });
};

getAllInPages();

