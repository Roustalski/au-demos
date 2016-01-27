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
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [utils.Log, core.Settings, module_1.AppRoutes])
        ], Shell);
        return Shell;
    })();
    exports.Shell = Shell;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYXlvdXQvc2hlbGwudHMiXSwibmFtZXMiOlsiU2hlbGwiLCJTaGVsbC5jb25zdHJ1Y3RvciIsIlNoZWxsLmxvZ2dlciIsIlNoZWxsLnNhbXBsZSIsIlNoZWxsLnJvdXRlckNvbmZpZyIsIlNoZWxsLnNldHRpbmdzIiwiU2hlbGwuY29uZmlndXJlUm91dGVyIiwiU2hlbGwuYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFPQTtRQTZESUEsZUFBWUEsR0FBY0EsRUFBRUEsUUFBdUJBLEVBQUVBLFlBQXVCQTtZQUN4RUMsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsQ0FBQ0E7WUFDbEJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO1lBQ3pCQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtZQUlqQ0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBeERERCxzQkFBV0EseUJBQU1BO2lCQUFqQkE7Z0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO1lBQ3hCQSxDQUFDQTtpQkFFREYsVUFBa0JBLENBQVlBO2dCQUMxQkUsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDckJBLENBQUNBOzs7V0FKQUY7UUFNREEsc0JBQVdBLHlCQUFNQTtpQkFBakJBO2dCQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtvQkFDL0JBLFVBQVVBLENBQUNBO3dCQUNQQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxTQUFTQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDL0NBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUNiQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUNOQSxDQUFDQTs7O1dBQUFIO1FBT0RBLHNCQUFXQSwrQkFBWUE7aUJBQXZCQTtnQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFDOUJBLENBQUNBO2lCQUVESixVQUF3QkEsQ0FBWUE7Z0JBQ2hDSSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUMzQkEsQ0FBQ0E7OztXQUpBSjtRQVlEQSxzQkFBV0EsMkJBQVFBO2lCQUFuQkE7Z0JBQ0lLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO1lBQzFCQSxDQUFDQTtpQkFFREwsVUFBb0JBLENBQWdCQTtnQkFDaENLLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3ZCQSxDQUFDQTs7O1dBSkFMO1FBcUJEQSwrQkFBZUEsR0FBZkEsVUFBZ0JBLE1BQTJCQSxFQUFFQSxNQUFjQTtZQUN2RE0sTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDM0NBLENBQUNBO1FBRUROLHdCQUFRQSxHQUFSQTtZQUNJTyxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFJQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxhQUFVQSxDQUFDQSxDQUFDQTtRQUM5REEsQ0FBQ0E7UUE3RUxQO1lBQUNBLDhCQUFVQTs7a0JBOEVWQTtRQUFEQSxZQUFDQTtJQUFEQSxDQTlFQSxBQThFQ0EsSUFBQTtJQTdFWSxhQUFLLFFBNkVqQixDQUFBIiwiZmlsZSI6ImFwcC9sYXlvdXQvc2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Um91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgKiBhcyBjb3JlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzL21vZHVsZSc7XG5pbXBvcnQge0FwcFJvdXRlc30gZnJvbSAnLi9tb2R1bGUnO1xuaW1wb3J0IHtDYXN0TW9kZWx9IGZyb20gJy4uLy4uL2RhdGEvdHlwZXMnO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIFNoZWxsIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcm9wZXJ0aWVzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBMb2dnZXJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBfbG9nZ2VyOiB1dGlscy5Mb2c7XG5cbiAgICBwdWJsaWMgZ2V0IGxvZ2dlcigpOiB1dGlscy5Mb2cge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9nZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbG9nZ2VyKHY6IHV0aWxzLkxvZykge1xuICAgICAgICB0aGlzLl9sb2dnZXIgPSB2O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2FtcGxlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04uc3RyaW5naWZ5KHt0aGlzOiAnaXNBVGVzdCd9KSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFJvdXRlciBDb25maWdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBfcm91dGVyQ29uZmlnOiBBcHBSb3V0ZXM7XG5cbiAgICBwdWJsaWMgZ2V0IHJvdXRlckNvbmZpZygpOiBBcHBSb3V0ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm91dGVyQ29uZmlnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcm91dGVyQ29uZmlnKHY6IEFwcFJvdXRlcykge1xuICAgICAgICB0aGlzLl9yb3V0ZXJDb25maWcgPSB2O1xuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBTZXR0aW5nc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIF9zZXR0aW5nczogY29yZS5TZXR0aW5ncztcblxuICAgIHB1YmxpYyBnZXQgc2V0dGluZ3MoKTogY29yZS5TZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNldHRpbmdzKHY6IGNvcmUuU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSB2O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBDb25zdHJ1Y3RvclxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yKGxvZzogdXRpbHMuTG9nLCBzZXR0aW5nczogY29yZS5TZXR0aW5ncywgcm91dGVyQ29uZmlnOiBBcHBSb3V0ZXMpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2c7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5yb3V0ZXJDb25maWcgPSByb3V0ZXJDb25maWc7XG5cbiAgICAgICAgLy9XaGVuIGRlYnVnZ2luZyBpbiBjaHJvbWUsIHRoaXMgdmFyaWFibGUgZ2V0cyBzdWNjZXNmdWxseSBjcmVhdGVkLlxuICAgICAgICAvL2J1dCwgdGhlIHNldHRpbmdzIGluamVjdGlvbiBpcyBub3Qgd29ya2luZyB2aWEgQGF1dG9pbmplY3RcbiAgICAgICAgbGV0IGJsYWggPSBuZXcgY29yZS5TZXR0aW5ncygpO1xuICAgIH1cblxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IHRoaXMuc2V0dGluZ3MuYXBwLnRpdGxlO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5zdWNjZXNzKGAke3RoaXMuc2V0dGluZ3MuYXBwLnRpdGxlfSBsb2FkZWQhYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
