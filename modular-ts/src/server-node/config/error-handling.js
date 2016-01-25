"use strict";

// ----------------------------------------
//
//  Express Middleware 404 and Error Handling
//
// ----------------------------------------
module.exports = app => {

    // ----------------------------------
    //  404
    // ----------------------------------
    /**
     * Forward dead links onto error handlers
     */
    app.use((req, res, next) => {
        let err = new Error("Not Found");
        err.status = 404;
        next(err);
    });

    // ----------------------------------
    //  Error Handler
    // ----------------------------------
    if ( app.get("env") === "development" ) {
        app.use((err, req, res, next) => {
            errorHandler(err.status, err.message, res, err);
        });
    } else {
        app.use((err, req, res, next) => {
            errorHandler(err.status, err.message, res);
        });
    }

    function errorHandler(status, message, res, details) {
        res.status(status || 500);
        res.render("error", {
            message: message,
            error: details || {}
        });
    }
};