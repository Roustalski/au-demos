System.register([], function (_export) {
    'use strict';

    var express, router;
    return {
        setters: [],
        execute: function () {
            express = require('express');
            router = express.Router();

            router.get('/', function (req, res, next) {
                res.json({ sample: "json" });
            });

            module.exports = router;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1ub2RlL3JvdXRlcy9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQUksT0FBTyxFQUNQLE1BQU07Ozs7QUFETixtQkFBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDNUIsa0JBQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFOztBQUU3QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNyQyxtQkFBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO2FBQzlCLENBQUMsQ0FBQzs7QUFFSCxrQkFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoic2VydmVyLW5vZGUvcm91dGVzL2FwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgIHJlcy5qc29uKHtzYW1wbGU6IFwianNvblwifSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
