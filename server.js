/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ******************************************
 * Require statements for the project
 *******************************************/
const routes = require('./src/routes');
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const cleanup = require('./src/config/mongodbDisconnect');
const env = require('./src/config/index');



/* ******************************************
 * Variables for middleware
 *******************************************/
const app = express();
// connectDB().catch(console.dir);

// For simple debugging
colors.enable();

/* ******************************************
 * Middleware
 *******************************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/* ******************************************
 * Routes
 *******************************************/
//Index Route
app.use('/', routes);

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = env.port;
const host = env.host;


/******************************************
 * Code Cleanup
 *******************************************/
process.on('beforeExit', async function() {
  console.log('About to exit, running some cleanup code...');
  // Your cleanup code here...
  cleanup.disconnect();
});

process.on('SIGINT', async function() {
  console.log('Received SIGINT, running cleanup code...');
  cleanup.disconnect();
  process.exit(0);
});

process.on('SIGTERM', async function() {
  console.log('Received SIGTERM, running cleanup code...');
  cleanup.disconnect();
  process.exit(0);
});

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
  })
  