// app.js - A simple Node.js Express application

// Import the Express module
const express = require('express');
// Create an instance of the Express application
const app = express();
// Define the port the application will listen on
const port = 80; // Matches the EXPOSE 80 in the Dockerfile

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  // Send a simple "Hello World" message as the response
  res.send('Hello World from your Dockerized Node.js app!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console when the server starts
  console.log(`App listening at http://localhost:${port}`);
});

// To run this application:
// 1. Make sure you have Node.js and npm installed.
// 2. Create a package.json file with:
//    {
//      "name": "my-simple-web-app",
//      "version": "1.0.0",
//      "description": "A simple Node.js web app",
//      "main": "app.js",
//      "scripts": {
//        "start": "node app.js"
//      },
//      "dependencies": {
//        "express": "^4.17.1"
//      }
//    }
// 3. Run 'npm install' in the same directory as package.json and app.js
// 4. Then, you can build your Docker image using the Dockerfile.
//    (Remember to uncomment the Node.js installation lines in the Dockerfile if you use this)
