const express = require("express");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const db = require("./db");

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

// Set up middleware
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true
    })
);

/**
 * ===================================
 * Routes
 * ===================================
 */

// Import routes to match incoming requests
require("./routes")(app, db);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
    console.log("Listening in on " + PORT + ".")
);

// Run clean up actions when server shuts down
server.on("close", () => {
    console.log("Closed express server");

    db.pool.end(() => {
        console.log("Shut down db connection pool");
    });
});

module.exports = app