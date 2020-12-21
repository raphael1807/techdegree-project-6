// ------------------------------------------
// EXPRESS APP
// ------------------------------------------
const express = require('express');
const app = express();

// ------------------------------------------
// VIEW ENGINE SETUP
// ------------------------------------------
app.set('view engine', 'pug');

// ------------------------------------------
// STATIC ROUTE MIDDLEWARE
// ------------------------------------------
app.use("/static", express.static("public"));

// ------------------------------------------
// MAIN ROUTES
// ------------------------------------------
const mainRoutes = require('./routes');
app.use(mainRoutes);

// ------------------------------------------
// ERROR HANDLERS
// ------------------------------------------
const errorHandlers = require('./routes/errors');
app.use(errorHandlers);

// ------------------------------------------
// LISTEN ON PORT 3000
// ------------------------------------------
app.listen(3000, () => {
    console.log('The application is running on localhost:3000! 🌐');
});