const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('Hi there, i am the app inside container');
});
//port where the container will listen
app.listen(8080, () => {
    console.log('listening on port 8080');
});