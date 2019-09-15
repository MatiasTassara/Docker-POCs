POC-Docker
Build the Docker Image for the HTML Server:
docker build -t get-api:v1 .

Run the Docker Container
docker run -d -p 80:80 get-api:v1