# node-gobarber
API para projeto GoBarber desenvolvida acompanhando o curso da Rocketseat-2020


**Settings to run the project node-gobarber:**

1 - Clone the repository node-gobarber.  
2 - Run command "yarn" in terminal to add the dependencies.  
3 - Create the image docker postgres with the command "docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres".  
4 - Create a new database connection:  
  type: "postgres"  
  host: "localhost"  
  username: "postgres"  
  password: "docker"  
5 - Run command "yarn typeorm migration:run" in terminal to create the tables in database.  
6 - Run command "yarn dev:server" in terminal to run the api.  
  
READY!! Your api is running
