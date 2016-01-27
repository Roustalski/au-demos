var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../core/module', '../utils/module', './module'], function (require, exports, aurelia_framework_1, core, utils, module_1) {
    var Shell = (function () {
        function Shell(log, settings, routerConfig) {
            this.logger = log;
            this.settings = settings;
            this.routerConfig = routerConfig;
            var blah = new core.Settings();
        }
        Object.defineProperty(Shell.prototype, "logger", {
            get: function () {
                return this._logger;
            },
            set: function (v) {
                this._logger = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shell.prototype, "sample", {
            get: function () {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve(JSON.stringify({ this: 'isATest' }));
                    }, 1000);
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shell.prototype, "routerConfig", {
            get: function () {
                return this._routerConfig;
            },
            set: function (v) {
                this._routerConfig = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shell.prototype, "settings", {
            get: function () {
                return this._settings;
            },
            set: function (v) {
                this._settings = v;
            },
            enumerable: true,
            configurable: true
        });
        Shell.prototype.configureRouter = function (config, router) {
            config.title = this.settings.app.title;
        };
        Shell.prototype.activate = function () {
            this.logger.success(this.settings.app.title + " loaded!");
        };
        Shell = __decorate([
            aurelia_framework_1.inject(utils.Log, core.Settings, module_1.AppRoutes),
            __metadata('design:paramtypes', [utils.Log, core.Settings, module_1.AppRoutes])
        ], Shell);
        return Shell;
    })();
    exports.Shell = Shell;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYXlvdXQvc2hlbGwudHMiXSwibmFtZXMiOlsiU2hlbGwiLCJTaGVsbC5jb25zdHJ1Y3RvciIsIlNoZWxsLmxvZ2dlciIsIlNoZWxsLnNhbXBsZSIsIlNoZWxsLnJvdXRlckNvbmZpZyIsIlNoZWxsLnNldHRpbmdzIiwiU2hlbGwuY29uZmlndXJlUm91dGVyIiwiU2hlbGwuYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFPQTtRQTZESUEsZUFBWUEsR0FBY0EsRUFBRUEsUUFBdUJBLEVBQUVBLFlBQXVCQTtZQUN4RUMsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsQ0FBQ0E7WUFDbEJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO1lBQ3pCQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtZQUlqQ0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBeERERCxzQkFBV0EseUJBQU1BO2lCQUFqQkE7Z0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO1lBQ3hCQSxDQUFDQTtpQkFFREYsVUFBa0JBLENBQVlBO2dCQUMxQkUsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDckJBLENBQUNBOzs7V0FKQUY7UUFNREEsc0JBQVdBLHlCQUFNQTtpQkFBakJBO2dCQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtvQkFDL0JBLFVBQVVBLENBQUNBO3dCQUNQQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxTQUFTQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDL0NBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUNiQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUNOQSxDQUFDQTs7O1dBQUFIO1FBT0RBLHNCQUFXQSwrQkFBWUE7aUJBQXZCQTtnQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFDOUJBLENBQUNBO2lCQUVESixVQUF3QkEsQ0FBWUE7Z0JBQ2hDSSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUMzQkEsQ0FBQ0E7OztXQUpBSjtRQVlEQSxzQkFBV0EsMkJBQVFBO2lCQUFuQkE7Z0JBQ0lLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO1lBQzFCQSxDQUFDQTtpQkFFREwsVUFBb0JBLENBQWdCQTtnQkFDaENLLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3ZCQSxDQUFDQTs7O1dBSkFMO1FBcUJEQSwrQkFBZUEsR0FBZkEsVUFBZ0JBLE1BQTJCQSxFQUFFQSxNQUFjQTtZQUN2RE0sTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDM0NBLENBQUNBO1FBRUROLHdCQUFRQSxHQUFSQTtZQUNJTyxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFJQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxhQUFVQSxDQUFDQSxDQUFDQTtRQUM5REEsQ0FBQ0E7UUE3RUxQO1lBQUNBLDBCQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxrQkFBU0EsQ0FBQ0E7O2tCQThFM0NBO1FBQURBLFlBQUNBO0lBQURBLENBOUVBLEFBOEVDQSxJQUFBO0lBN0VZLGFBQUssUUE2RWpCLENBQUEiLCJmaWxlIjoiYXBwL2xheW91dC9zaGVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlckNvbmZpZ3VyYXRpb24sIFJvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0ICogYXMgY29yZSBmcm9tICcuLi9jb3JlL21vZHVsZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscy9tb2R1bGUnO1xuaW1wb3J0IHtBcHBSb3V0ZXN9IGZyb20gJy4vbW9kdWxlJztcbmltcG9ydCB7Q2FzdE1vZGVsfSBmcm9tICcuLi8uLi9kYXRhL3R5cGVzJztcblxuQGluamVjdCh1dGlscy5Mb2csIGNvcmUuU2V0dGluZ3MsIEFwcFJvdXRlcylcbmV4cG9ydCBjbGFzcyBTaGVsbCB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJvcGVydGllc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgTG9nZ2VyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgX2xvZ2dlcjogdXRpbHMuTG9nO1xuXG4gICAgcHVibGljIGdldCBsb2dnZXIoKTogdXRpbHMuTG9nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxvZ2dlcih2OiB1dGlscy5Mb2cpIHtcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gdjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNhbXBsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnN0cmluZ2lmeSh7dGhpczogJ2lzQVRlc3QnfSkpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBSb3V0ZXIgQ29uZmlnXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgX3JvdXRlckNvbmZpZzogQXBwUm91dGVzO1xuXG4gICAgcHVibGljIGdldCByb3V0ZXJDb25maWcoKTogQXBwUm91dGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRlckNvbmZpZztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJvdXRlckNvbmZpZyh2OiBBcHBSb3V0ZXMpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyQ29uZmlnID0gdjtcbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgU2V0dGluZ3NcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBfc2V0dGluZ3M6IGNvcmUuU2V0dGluZ3M7XG5cbiAgICBwdWJsaWMgZ2V0IHNldHRpbmdzKCk6IGNvcmUuU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXR0aW5ncyh2OiBjb3JlLlNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gdjtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgQ29uc3RydWN0b3JcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3Rvcihsb2c6IHV0aWxzLkxvZywgc2V0dGluZ3M6IGNvcmUuU2V0dGluZ3MsIHJvdXRlckNvbmZpZzogQXBwUm91dGVzKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuXG4gICAgICAgIC8vV2hlbiBkZWJ1Z2dpbmcgaW4gY2hyb21lLCB0aGlzIHZhcmlhYmxlIGdldHMgc3VjY2VzZnVsbHkgY3JlYXRlZC5cbiAgICAgICAgLy9idXQsIHRoZSBzZXR0aW5ncyBpbmplY3Rpb24gaXMgbm90IHdvcmtpbmcgdmlhIEBhdXRvaW5qZWN0XG4gICAgICAgIGxldCBibGFoID0gbmV3IGNvcmUuU2V0dGluZ3MoKTtcbiAgICB9XG5cbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBjb25maWcudGl0bGUgPSB0aGlzLnNldHRpbmdzLmFwcC50aXRsZTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuc3VjY2VzcyhgJHt0aGlzLnNldHRpbmdzLmFwcC50aXRsZX0gbG9hZGVkIWApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
