## Introduction 

The API provides four basic functionalities, i.e., create, read, update and delete. The four methods used in the REST environment are GET, POST, PUT, DELETE. 

### Creating PostgreSQL database

For Mac open the terminal and install using the command below.

````brew install postgresql````


After the installation is complete, to get the postgresql up and running can be done with services start.

````brew services start postgresql````

We can connect to the default postgres database with the default login information – no option flags.

````psql postgres````

Create a database with the SQL command.

````postgres=> CREATE DATABASE api;````

To set up a Node.js app and Express.js server, create a directory for the project to live in.

````mkdir node-api-postgres````
````cd node-api-postgres````

install Express.js for the server and node-postgres (pg) to connect to PostgreSQL.

````npm i express pg````

### Executing the files

with two files index.js and query.js, we have a server, database, and API all set up. We can start up the server by hitting index.js.

````node index.js````

To test our POST, PUT, and DELETE requests, use curl terminal command. For example for POST, 

````curl --data "name=vivek&email=vivek@example.com" ````

### Implementing Server‐side Routing of HTTP Requests to APIs

<img width="1276" alt="Screen Shot 2022-04-11 at 9 26 01 PM" src="https://user-images.githubusercontent.com/100319800/162861986-d853d841-0224-4ffa-970f-8b09e68c221f.png">

Data is recieved at the bank's url and is sent to the customers where they have three choices(GET, POST, PUT) where a customer account can be created, some data can be updated.
