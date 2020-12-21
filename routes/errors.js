// ------------------------------------------
// EXPRESS APP
// ------------------------------------------
const express = require('express');
const errors = express();

// ------------------------------------------
// 404 HANDLER CATCHER
// ------------------------------------------
errors.use((req, res, next) => {
    const err = new Error(`The page requested does not exist! 😞`);
    err.status = 404;
    console.log(`💻 Error ${err.status} ️⚠️ ${err.message}`);
    next(err);
});

// ------------------------------------------
// GLOBAL HANDLE ERRORS
// ------------------------------------------
errors.use((err, req, res, next) => {
    if (err) {
        console.log('Global error handler called 🌎', err);
    }
    // If err.status === 404, render page-not-found.
    if (err.status === 404) {
        res.status(404);
        res.render('page-not-found', { err });
    }
    // Else if err.status is not 404, render error.
    else {
        err.message = err.message || `These are uncharted waters⛵. Sorry, that page can't be found.`;
        res.status(err.status || 500);
        res.render('error', { err });
    }
});

// ------------------------------------------
// Export app
// ------------------------------------------
module.exports = errors;