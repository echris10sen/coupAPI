/****************************************************************************************
 * Description: This file is used to disconnect from the MongoDB database
 * Table of Contents:
 *  Imports: None
 *  Variables: None
 *  Functions:
 *      -disconnect: Disconnect from MongoDB
 *  Exports: 
 *      -disconnect
 * ***************************************************************************************/

/***********************
 * Functions:
 * disconnect: Disconnect from MongoDB
 * -Returns: A Promise that resolves to the client object
 * -Throws: An error if the connection fails
 * -Side Effects: Disconnects from MongoDB
 * -Modifies: None
 * -Example: client.connect().then(client => {console.log('connected')})
 * -Notes: None
 * -Issues: None
 * *********************************************************/
const disconnect = async function() {
    await client.close();
    console.log('Disconnected from MongoDB');
}

/***********************
 * Exports:
 * disconnect
 * Example: const {disconnect} = require('./mongodbDisconnect');
 * *********************************************************/
module.exports = {disconnect};