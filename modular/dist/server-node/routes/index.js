System.register([], function (_export) {
  'use strict';

  var express, router;
  return {
    setters: [],
    execute: function () {
      express = require('express');
      router = express.Router();

      router.get('/', function (req, res, next) {
        res.render('index', { title: 'Express' });
      });

      module.exports = router;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1ub2RlL3JvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBSSxPQUFPLEVBQ1AsTUFBTTs7OztBQUROLGFBQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQzVCLFlBQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFOztBQUc3QixZQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDLFdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7T0FDM0MsQ0FBQyxDQUFDOztBQUVILFlBQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6InNlcnZlci1ub2RlL3JvdXRlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCBob21lIHBhZ2UuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7IHRpdGxlOiAnRXhwcmVzcycgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
