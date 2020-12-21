// ------------------------------------------
// EXPRESS APP and ROUTER
// ------------------------------------------
const express = require('express');
const router = express.Router();

// ------------------------------------------
// REQUIRE DATA.JSON DATAS
// ------------------------------------------
const data = require('../data.json');

// ------------------------------------------
// GET homepage request, renders index.pug
// ------------------------------------------
router.get("/", (req, res) => {
    // Renders index page
    res.render("index", { data });
});

// ------------------------------------------
// GET /about page request, renders about.pug
// ------------------------------------------
router.get("/about", (req, res) => {
    // Renders about page
    res.render("about");
});

// ------------------------------------------
// GET project/id page request route, renders project/id
// ------------------------------------------
router.get('/project/:id', (req, res, next) => {
    // If requested route=true, render project.id.
    if (data.projects[req.params.id]) {
        // Renders project page
        res.render('project', { project: data.projects[req.params.id] });
        // Else, creates a 404 error and pass the next middleware with the err parameter
    } else {
        const err = new Error('This project does not exist!🤔');
        err.status = 404;
        // Renders page-not-found page
        res.render('page-not-found', { err });
    }
});

// ------------------------------------------
// GET error page - create and throw 500 server error
// ------------------------------------------
router.get('/error', (req, res, next) => {
    console.log('Error page called');
    const err = new Error('Oops, something went bad! 🥺');
    err.status = 500;
    // Renders error page
    res.render('error', { err });
});

// ------------------------------------------
// Export router
// ------------------------------------------
module.exports = router;