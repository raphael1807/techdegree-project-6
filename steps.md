Setup your server, routes and middleware
Create an app.js file at the root of your directory.
Add variables to require the necessary dependencies. You'll need to require:
Express
Your data.json file
Optionally - the path module which can be used when setting the absolute path in the express.static function.
Set up your middleware:
set your “view engine” to “pug”
use a static route and the express.static method to serve the static files located in the public folder
Set your routes. You'll need:
An "index" route (/) to render the "Home" page with the locals set to data.projects
An "about" route (/about) to render the "About" page
Dynamic "project" routes (/project/:id or /projects/:id) based on the id of the project that render a customized version of the Pug project template to show off each project. Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
Finally, start your server. Your app should listen on port 3000, and log a string to the console that says which port the app is listening to.

<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->

Handle errors
If a user navigates to a non-existent or undefined route, such as /noroute or /project/noroute, or if a request for a resource fails for whatever reason, your app should handle the problem in a user friendly way.
Since incoming requests to undefined routes aren't technically "server errors", Express doesn't throw an error when this happens. So you need to create you're own way of catching this event when it happens and responding appropriately. You do this with a 404 handler, which you'll add near the bottom of app.js to catch any requests for undefined routes.
The 404 handler should create a custom new Error(), set its status property to 404 and set its message property to a user friendly message. Then the 404 handler should log out the new error's message and status properties.
After the 404 handler in app.js add a global error handler that will deal with any server errors the app encounters. This handler should ensure that there is an err.status property and an err.message property if they don't already exist, and then log out the err object's message and status.
Test your error handling by pointing the browser at a few undefined routes, like /noroute and /project/noroute, as well as temporarily throwing an intentional 500 error in one of your routes and then navigating to the page for that route.
For review and practice, refer to the error handling practice session and/or the video on error handling Middleware, both of which are linked in the project resources list.

<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->

Complete your Pug files
Go through each of the four Pug templates to inject your data. The Pug files contain comments that detail each change you will need to make. You can and should delete these comments when you are finished with this step. But you should wait to do so until everything is working as it should, in case you need to refer to these notes during development.
Leave the example HTML files in your project so your reviewer can reference them.
Note: Consider adding a target attribute set to \_blank on the a tags for the live links to your projects so that they open in a new window.

Layout, CSS and styles
The layout of the finished project should match the provided mockups.
To really make this project your own, you should customize the CSS following the suggestions in the Extra Credit section at the bottom of this page.
