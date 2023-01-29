## gRPC Example (Using node js)

In this session, doubts about the first phase of the project were solved and the students were taught about rpc (remote procedure calls) and also the gRPC framework was taught, which is a very useful tool to implement rpc.

### Installing commands:

```bash
## Change into the server application directory.
cd server/

## Copy the mysql_connection.js file and change the values to your local enviroment.

cp mysql_connection_example.js mysql_connection.js

## Install project dependencies (or you could use "npm install" instead).
yarn

## Excecute development server (In npm you can use "npm run dev").
yarn dev

## Change into the client application directory.
cd client/

## Install project dependencies (or you could use "npm install" instead).
yarn

## Excecute development server (In npm you can use "npm run dev").
yarn dev
```
#### Note:

First of all, you need to execute all the database scripts that are inside of the `db/` directory. The database system used in this case is MariaDB but you also can use MySQL.

#### Testing

For testing, I add a little example of the requests using Insomnia REST Client the request collection is inside of this folder `insomnia/`, you got the both collection folders, in http and gRPC.

### Python testing using locust

For major testing I add an Python script for testing using little bunch of data an scan the request timing inside the bash console.

You can install the application using pip following the next steps:

```bash

## Change into the loader application directory.
cd loader/

## Install the dependencies using pip or pip3
pip install locust

## Execute the project using python or python

python main.py
```


Niger Andrey Poot May - 2023
