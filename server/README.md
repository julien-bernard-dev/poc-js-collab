This project is as small backend API built to handle CRUD operation over Collab database.   
It is based on a Nodejs 10.X, with Express framework. Database is Mongodb 4.X

App skeleton has been created with the following command :  
***npm install express body-parser cors mongoose nodemon***   

App is composed of the following blocks :   
- express: server (nodejs) framework.  
- body-parser: to get the body off of http request.  
- cors: to enable CORS ptions to dialog with react client  
- mongoose: mongoDB abstract modeling for nodejs  
- nodemon: to restart the server when changes occur.  

To run the application, enter the commande **node index.js**, at project root folder   
(or **npx nodemon index.js**, to lazy reload server when changes occur un JS sources)   
The app tries to connect to a mongodb local server, on a "collab" database, on 27017 port.  
