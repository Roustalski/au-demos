"use strict";

// ----------------------------------------
//
//  Dependencies
//
// ----------------------------------------
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let session = require("express-session");
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// ----------------------------------------
//
//  Constants
//
// ----------------------------------------
const CLIENT_PATH = path.join(__dirname, "../..", "dist");
const VIEW_PATH = path.join(__dirname, "views");

// ----------------------------------------
//
//  Configuration
//
// ----------------------------------------
// ----------------------------------
//  Database
// ----------------------------------
//TODO: Provide an opinion for database options
//require("./config/[database]")([client]);

// ----------------------------------
//  Authentication
// ----------------------------------
//TODO: Provide an opinion for an authentication strategy
//require("./config/[authenticator|passport]]")([module]);

// ----------------------------------
//  Application
// ----------------------------------
let app = express();

/**
 * HTML templating engine
 */
app.set('views', VIEW_PATH);
app.set('view engine', 'hbs');
//app.use(favicon(path.join(CLIENT_PATH, 'favicon.ico')));

/**
 * Server HTTP logging
 */
logger.token("user-info", request => {
    //TODO: Additional user identifier for incoming requests
    if ( !request.user ) return "[Anonymous] - ";
    return `${request.user.name} - ${request.user.email} - `;
});
//Morgan "combined" + prefixed custom user info token
app.use(logger(':user-info :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));
//app.use(logger("combined"));

/**
 * HTML form helper
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Enables reading cookies out of a header
 */
app.use(cookieParser());

/**
 * Persistent sessions [with authentication]
 */
//TODO: Default session storage, MemoryStore, is not designed for production (https://www.npmjs.com/package/express-session#compatible-session-stores)
app.use(session({
    secret: "[your-secret-here]"
    //TODO: You will get an express-session deprecated warning without specifying the resave option. Your response will depend on your session storage selection. (https://www.npmjs.com/package/express-session#resave)
    //resave: true,
    //TODO: You will get an express-session deprecated warning without specifying saveUninitialized option. (https://www.npmjs.com/package/express-session#saveuninitialized)
    //saveUninitialized: true
}));
//app.use([authenticator|passport].initialize());
//app.use([authenticator|passport].session());

/**
 * Server route definitions, optionally passing [authenticator|passport] for protected routes
 */
require("./config/routes")(express.static(CLIENT_PATH), app/*, [authenticator|passport]*/);

module.exports = app;
