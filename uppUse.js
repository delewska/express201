const express = require('express');
const app= express();

// Express = 2 things
// 1. Router
// 2. Middleware that comprises a webframework

// Req --- MIDDLEWARE ---> Res
// Middleware function is ANY function that has access to the req, res, next object.

// Req ---MIDDLEWARE --> Res
// 1. Request comes in.
// 2. We need to validate the user,somethimes.
//     3. We need to store some things in the DB.
//     4. If there is data from the user we need to parse it and store it.
//     5. Res

app.get('/' , (req, res, next) => {
 res.send("<h1>Main Page</h1>")
});

app.listen(3000);