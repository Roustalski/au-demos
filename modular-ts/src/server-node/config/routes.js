"use strict";
module.exports = (staticClient, app/*, [authenticator|passport] */) => {

    //TODO: Define application routes. Currently configured as a single page client application
    app.use("/", staticClient);

    //TODO: Need a REST API to send back JSON data?
    app.use("/api", require("../routes/api"));

    //TODO: Protected route?
    //app.use("/super-secret-route", isLoggedIn, require("../routes/super-secret/resource"));

    /**
     * 404 and error handling
     */
    require("./error-handling")(app);
};

function isLoggedIn(req, res, next) {
    //TODO: Implementation depends on your authentication implementation
    return next();

    /*
    if ( req.isAuthenticated() ) {
        return next();
    }

    //TODO: Protected routes without the user being authenticated should redirect where?
    res.redirect("/");
    */
}