## Mongodb replica sets boilerplate for Node.js

This project contains boilerplate setup for three replica stes for mongodb in node.js application. You can add more sets as you wish.

## Run the project

To run the project just run

`docker-compose up --build -d `

## Add more sets

By default, there will be three replica sets. If you wish to add more just go in `docker-compose.yml` file and add the mongo services as you wish.

For example

```bash
  mongo4:
   image: mongo:7.0
   command: ['--replSet', 'rs0', '--bind_ip_all', '--port', '27020']
   ports:
      - 27020:27020 // Adjust the port
```

And in `config/dbconfig/dbConnect.ts` in uri add the new services port i.e.

```
const uri = 'mongodb://mongo1:27017,mongo2:27018,mongo3:27019,mongo4:27020/?replicaSet=rs0';
//add <host>:<port> for all services
```
