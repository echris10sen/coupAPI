const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'This API is used to connect to a MongoDB Database and perform CRUD operations on a collection.'
  },
  host: 'https://coup-api.onrender.com',
  definitions: {
    player: 
    { 
        user_name: "username",
        is_online: false,
        in_game: false,
        email: "email@email.com",
        first_name: "First Name",
        last_name: "Last Name",
        last_login: "YYYY-MM-DD",
        games_played: 0,
        games_won: 0
    },
    card:
    {
        name: "name_of_card",
        effect: "action_description",
        action: "action",
        influence: true,
        counter_action: "counter_action"
    }
  },
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/index.js'];
/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);