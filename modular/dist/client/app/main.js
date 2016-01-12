System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        aurelia.start().then(function () {
            return aurelia.setRoot("app/greeter/greeter.module");
        });
    }

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUJBQWdCLFNBQVM7O0FBQWxCLGFBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUMvQixlQUFPLENBQUMsR0FBRyxDQUNOLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQUM7O0FBRTFCLGVBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7bUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUM3RSIsImZpbGUiOiJjbGllbnQvYXBwL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcbiAgICBhdXJlbGlhLnVzZVxuICAgICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAgICAgLmRldmVsb3BtZW50TG9nZ2luZygpO1xuXG4gICAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFwiYXBwL2dyZWV0ZXIvZ3JlZXRlci5tb2R1bGVcIikpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
