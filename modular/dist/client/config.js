System.register([], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      System.config({
        baseURL: "/",
        defaultJSExtensions: true,
        transpiler: "babel",
        babelOptions: {
          "optional": ["runtime", "optimisation.modules.system", "es7.decorators", "es7.classProperties"]
        },
        paths: {
          "github:*": "jspm_packages/github/*",
          "npm:*": "jspm_packages/npm/*"
        },

        map: {
          "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.3",
          "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2",
          "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.0.2",
          "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.8",
          "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
          "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.2",
          "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
          "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
          "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
          "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.4",
          "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.5",
          "babel": "npm:babel-core@5.8.34",
          "babel-runtime": "npm:babel-runtime@5.8.34",
          "bootstrap": "github:twbs/bootstrap@3.3.6",
          "core-js": "npm:core-js@1.2.6",
          "fetch": "github:github/fetch@0.10.1",
          "font-awesome": "npm:font-awesome@4.5.0",
          "text": "github:systemjs/plugin-text@0.0.3",
          "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
          },
          "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
          },
          "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.2"
          },
          "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
          },
          "github:twbs/bootstrap@3.3.6": {
            "jquery": "github:components/jquery@2.2.0"
          },
          "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
          },
          "npm:aurelia-animator-css@1.0.0-beta.1.0.3": {
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
          },
          "npm:aurelia-binding@1.0.0-beta.1.0.5": {
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2": {
            "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
            "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.8",
            "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
            "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
            "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.2",
            "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.0.3",
            "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
            "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
            "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
            "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.4",
            "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.5",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1": {
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-event-aggregator@1.0.0-beta.1": {
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
          },
          "npm:aurelia-fetch-client@1.0.0-beta.1.0.2": {
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-framework@1.0.0-beta.1.0.8": {
            "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
            "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
            "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
            "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-loader-default@1.0.0-beta.1.0.2": {
            "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
          },
          "npm:aurelia-loader@1.0.0-beta.1.0.1": {
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
          },
          "npm:aurelia-logging-console@1.0.0-beta.1": {
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
          },
          "npm:aurelia-metadata@1.0.0-beta.1": {
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-pal-browser@1.0.0-beta.1.0.3": {
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-route-recognizer@1.0.0-beta.1": {
            "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-router@1.0.0-beta.1.0.1": {
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
            "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
            "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
            "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
          },
          "npm:aurelia-templating-binding@1.0.0-beta.1.0.2": {
            "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
          },
          "npm:aurelia-templating-resources@1.0.0-beta.1.0.4": {
            "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
            "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
            "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:aurelia-templating-router@1.0.0-beta.1.0.5": {
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
            "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
            "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
          },
          "npm:aurelia-templating@1.0.0-beta.1.0.3": {
            "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
            "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
            "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
            "core-js": "npm:core-js@1.2.6"
          },
          "npm:babel-runtime@5.8.34": {
            "process": "github:jspm/nodelibs-process@0.1.2"
          },
          "npm:core-js@1.2.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
          },
          "npm:font-awesome@4.5.0": {
            "css": "github:systemjs/plugin-css@0.1.20"
          },
          "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
          },
          "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
          },
          "npm:process@0.11.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
          },
          "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
          }
        }
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LEVBQUUsbUNBQW1DO0FBQ3ZELHlCQUFhLEVBQUUsa0NBQWtDO0FBQ2pELDBCQUFjLEVBQUUsK0JBQStCO0FBQy9DLGdDQUFvQixFQUFFLHlDQUF5QztBQUMvRCxxQkFBUyxFQUFFLG1CQUFtQjtXQUMvQjtBQUNELG9DQUEwQixFQUFFO0FBQzFCLHFCQUFTLEVBQUUsb0NBQW9DO1dBQ2hEO0FBQ0QsNkJBQW1CLEVBQUU7QUFDbkIsZ0JBQUksRUFBRSwrQkFBK0I7QUFDckMsa0JBQU0sRUFBRSxpQ0FBaUM7QUFDekMscUJBQVMsRUFBRSxvQ0FBb0M7QUFDL0MsMkJBQWUsRUFBRSxtQ0FBbUM7V0FDckQ7QUFDRCxrQ0FBd0IsRUFBRTtBQUN4QixpQkFBSyxFQUFFLG1DQUFtQztXQUMzQztBQUNELDhCQUFvQixFQUFFO0FBQ3BCLGtCQUFNLEVBQUUsaUNBQWlDO1dBQzFDO0FBQ0QscUNBQTJCLEVBQUU7QUFDM0IscUJBQVMsRUFBRSxvQ0FBb0M7V0FDaEQ7QUFDRCw4QkFBb0IsRUFBRTtBQUNwQixvQkFBUSxFQUFFLG1DQUFtQztXQUM5QztBQUNELDJCQUFpQixFQUFFO0FBQ2pCLHNCQUFVLEVBQUUsb0JBQW9CO0FBQ2hDLHFCQUFTLEVBQUUsb0NBQW9DO1dBQ2hEO1NBQ0Y7T0FDRixDQUFDLENBQUMiLCJmaWxlIjoiY2xpZW50L2NvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5jb25maWcoe1xuICBiYXNlVVJMOiBcIi9cIixcbiAgZGVmYXVsdEpTRXh0ZW5zaW9uczogdHJ1ZSxcbiAgdHJhbnNwaWxlcjogXCJiYWJlbFwiLFxuICBiYWJlbE9wdGlvbnM6IHtcbiAgICBcIm9wdGlvbmFsXCI6IFtcbiAgICAgIFwicnVudGltZVwiLFxuICAgICAgXCJvcHRpbWlzYXRpb24ubW9kdWxlcy5zeXN0ZW1cIixcbiAgICAgIFwiZXM3LmRlY29yYXRvcnNcIixcbiAgICAgIFwiZXM3LmNsYXNzUHJvcGVydGllc1wiXG4gICAgXVxuICB9LFxuICBwYXRoczoge1xuICAgIFwiZ2l0aHViOipcIjogXCJqc3BtX3BhY2thZ2VzL2dpdGh1Yi8qXCIsXG4gICAgXCJucG06KlwiOiBcImpzcG1fcGFja2FnZXMvbnBtLypcIlxuICB9LFxuXG4gIG1hcDoge1xuICAgIFwiYXVyZWxpYS1hbmltYXRvci1jc3NcIjogXCJucG06YXVyZWxpYS1hbmltYXRvci1jc3NAMS4wLjAtYmV0YS4xLjAuM1wiLFxuICAgIFwiYXVyZWxpYS1ib290c3RyYXBwZXJcIjogXCJucG06YXVyZWxpYS1ib290c3RyYXBwZXJAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjogXCJucG06YXVyZWxpYS1mZXRjaC1jbGllbnRAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjogXCJucG06YXVyZWxpYS1mcmFtZXdvcmtAMS4wLjAtYmV0YS4xLjAuOFwiLFxuICAgIFwiYXVyZWxpYS1oaXN0b3J5LWJyb3dzZXJcIjogXCJucG06YXVyZWxpYS1oaXN0b3J5LWJyb3dzZXJAMS4wLjAtYmV0YS4xLjAuMVwiLFxuICAgIFwiYXVyZWxpYS1sb2FkZXItZGVmYXVsdFwiOiBcIm5wbTphdXJlbGlhLWxvYWRlci1kZWZhdWx0QDEuMC4wLWJldGEuMS4wLjJcIixcbiAgICBcImF1cmVsaWEtbG9nZ2luZy1jb25zb2xlXCI6IFwibnBtOmF1cmVsaWEtbG9nZ2luZy1jb25zb2xlQDEuMC4wLWJldGEuMVwiLFxuICAgIFwiYXVyZWxpYS1yb3V0ZXJcIjogXCJucG06YXVyZWxpYS1yb3V0ZXJAMS4wLjAtYmV0YS4xLjAuMVwiLFxuICAgIFwiYXVyZWxpYS10ZW1wbGF0aW5nLWJpbmRpbmdcIjogXCJucG06YXVyZWxpYS10ZW1wbGF0aW5nLWJpbmRpbmdAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgIFwiYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlc1wiOiBcIm5wbTphdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzQDEuMC4wLWJldGEuMS4wLjRcIixcbiAgICBcImF1cmVsaWEtdGVtcGxhdGluZy1yb3V0ZXJcIjogXCJucG06YXVyZWxpYS10ZW1wbGF0aW5nLXJvdXRlckAxLjAuMC1iZXRhLjEuMC41XCIsXG4gICAgXCJiYWJlbFwiOiBcIm5wbTpiYWJlbC1jb3JlQDUuOC4zNFwiLFxuICAgIFwiYmFiZWwtcnVudGltZVwiOiBcIm5wbTpiYWJlbC1ydW50aW1lQDUuOC4zNFwiLFxuICAgIFwiYm9vdHN0cmFwXCI6IFwiZ2l0aHViOnR3YnMvYm9vdHN0cmFwQDMuMy42XCIsXG4gICAgXCJjb3JlLWpzXCI6IFwibnBtOmNvcmUtanNAMS4yLjZcIixcbiAgICBcImZldGNoXCI6IFwiZ2l0aHViOmdpdGh1Yi9mZXRjaEAwLjEwLjFcIixcbiAgICBcImZvbnQtYXdlc29tZVwiOiBcIm5wbTpmb250LWF3ZXNvbWVANC41LjBcIixcbiAgICBcInRleHRcIjogXCJnaXRodWI6c3lzdGVtanMvcGx1Z2luLXRleHRAMC4wLjNcIixcbiAgICBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLWFzc2VydEAwLjEuMFwiOiB7XG4gICAgICBcImFzc2VydFwiOiBcIm5wbTphc3NlcnRAMS4zLjBcIlxuICAgIH0sXG4gICAgXCJnaXRodWI6anNwbS9ub2RlbGlicy1wYXRoQDAuMS4wXCI6IHtcbiAgICAgIFwicGF0aC1icm93c2VyaWZ5XCI6IFwibnBtOnBhdGgtYnJvd3NlcmlmeUAwLjAuMFwiXG4gICAgfSxcbiAgICBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLXByb2Nlc3NAMC4xLjJcIjoge1xuICAgICAgXCJwcm9jZXNzXCI6IFwibnBtOnByb2Nlc3NAMC4xMS4yXCJcbiAgICB9LFxuICAgIFwiZ2l0aHViOmpzcG0vbm9kZWxpYnMtdXRpbEAwLjEuMFwiOiB7XG4gICAgICBcInV0aWxcIjogXCJucG06dXRpbEAwLjEwLjNcIlxuICAgIH0sXG4gICAgXCJnaXRodWI6dHdicy9ib290c3RyYXBAMy4zLjZcIjoge1xuICAgICAgXCJqcXVlcnlcIjogXCJnaXRodWI6Y29tcG9uZW50cy9qcXVlcnlAMi4yLjBcIlxuICAgIH0sXG4gICAgXCJucG06YXNzZXJ0QDEuMy4wXCI6IHtcbiAgICAgIFwidXRpbFwiOiBcIm5wbTp1dGlsQDAuMTAuM1wiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLWFuaW1hdG9yLWNzc0AxLjAuMC1iZXRhLjEuMC4zXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1tZXRhZGF0YVwiOiBcIm5wbTphdXJlbGlhLW1ldGFkYXRhQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXBhbFwiOiBcIm5wbTphdXJlbGlhLXBhbEAxLjAuMC1iZXRhLjEuMC4yXCIsXG4gICAgICBcImF1cmVsaWEtdGVtcGxhdGluZ1wiOiBcIm5wbTphdXJlbGlhLXRlbXBsYXRpbmdAMS4wLjAtYmV0YS4xLjAuM1wiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLWJpbmRpbmdAMS4wLjAtYmV0YS4xLjAuNVwiOiB7XG4gICAgICBcImF1cmVsaWEtbWV0YWRhdGFcIjogXCJucG06YXVyZWxpYS1tZXRhZGF0YUAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1wYWxcIjogXCJucG06YXVyZWxpYS1wYWxAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgICAgXCJhdXJlbGlhLXRhc2stcXVldWVcIjogXCJucG06YXVyZWxpYS10YXNrLXF1ZXVlQDEuMC4wLWJldGEuMS4wLjFcIixcbiAgICAgIFwiY29yZS1qc1wiOiBcIm5wbTpjb3JlLWpzQDEuMi42XCJcbiAgICB9LFxuICAgIFwibnBtOmF1cmVsaWEtYm9vdHN0cmFwcGVyQDEuMC4wLWJldGEuMS4wLjJcIjoge1xuICAgICAgXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjogXCJucG06YXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLWZyYW1ld29ya1wiOiBcIm5wbTphdXJlbGlhLWZyYW1ld29ya0AxLjAuMC1iZXRhLjEuMC44XCIsXG4gICAgICBcImF1cmVsaWEtaGlzdG9yeVwiOiBcIm5wbTphdXJlbGlhLWhpc3RvcnlAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImF1cmVsaWEtaGlzdG9yeS1icm93c2VyXCI6IFwibnBtOmF1cmVsaWEtaGlzdG9yeS1icm93c2VyQDEuMC4wLWJldGEuMS4wLjFcIixcbiAgICAgIFwiYXVyZWxpYS1sb2FkZXItZGVmYXVsdFwiOiBcIm5wbTphdXJlbGlhLWxvYWRlci1kZWZhdWx0QDEuMC4wLWJldGEuMS4wLjJcIixcbiAgICAgIFwiYXVyZWxpYS1sb2dnaW5nLWNvbnNvbGVcIjogXCJucG06YXVyZWxpYS1sb2dnaW5nLWNvbnNvbGVAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImF1cmVsaWEtcGFsXCI6IFwibnBtOmF1cmVsaWEtcGFsQDEuMC4wLWJldGEuMS4wLjJcIixcbiAgICAgIFwiYXVyZWxpYS1wYWwtYnJvd3NlclwiOiBcIm5wbTphdXJlbGlhLXBhbC1icm93c2VyQDEuMC4wLWJldGEuMS4wLjNcIixcbiAgICAgIFwiYXVyZWxpYS1yb3V0ZXJcIjogXCJucG06YXVyZWxpYS1yb3V0ZXJAMS4wLjAtYmV0YS4xLjAuMVwiLFxuICAgICAgXCJhdXJlbGlhLXRlbXBsYXRpbmdcIjogXCJucG06YXVyZWxpYS10ZW1wbGF0aW5nQDEuMC4wLWJldGEuMS4wLjNcIixcbiAgICAgIFwiYXVyZWxpYS10ZW1wbGF0aW5nLWJpbmRpbmdcIjogXCJucG06YXVyZWxpYS10ZW1wbGF0aW5nLWJpbmRpbmdAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgICAgXCJhdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzXCI6IFwibnBtOmF1cmVsaWEtdGVtcGxhdGluZy1yZXNvdXJjZXNAMS4wLjAtYmV0YS4xLjAuNFwiLFxuICAgICAgXCJhdXJlbGlhLXRlbXBsYXRpbmctcm91dGVyXCI6IFwibnBtOmF1cmVsaWEtdGVtcGxhdGluZy1yb3V0ZXJAMS4wLjAtYmV0YS4xLjAuNVwiLFxuICAgICAgXCJjb3JlLWpzXCI6IFwibnBtOmNvcmUtanNAMS4yLjZcIlxuICAgIH0sXG4gICAgXCJucG06YXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbkAxLjAuMC1iZXRhLjEuMC4xXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1sb2dnaW5nXCI6IFwibnBtOmF1cmVsaWEtbG9nZ2luZ0AxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1tZXRhZGF0YVwiOiBcIm5wbTphdXJlbGlhLW1ldGFkYXRhQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXBhbFwiOiBcIm5wbTphdXJlbGlhLXBhbEAxLjAuMC1iZXRhLjEuMC4yXCIsXG4gICAgICBcImNvcmUtanNcIjogXCJucG06Y29yZS1qc0AxLjIuNlwiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JAMS4wLjAtYmV0YS4xXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1sb2dnaW5nXCI6IFwibnBtOmF1cmVsaWEtbG9nZ2luZ0AxLjAuMC1iZXRhLjFcIlxuICAgIH0sXG4gICAgXCJucG06YXVyZWxpYS1mZXRjaC1jbGllbnRAMS4wLjAtYmV0YS4xLjAuMlwiOiB7XG4gICAgICBcImNvcmUtanNcIjogXCJucG06Y29yZS1qc0AxLjIuNlwiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLWZyYW1ld29ya0AxLjAuMC1iZXRhLjEuMC44XCI6IHtcbiAgICAgIFwiYXVyZWxpYS1iaW5kaW5nXCI6IFwibnBtOmF1cmVsaWEtYmluZGluZ0AxLjAuMC1iZXRhLjEuMC41XCIsXG4gICAgICBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjogXCJucG06YXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbkAxLjAuMC1iZXRhLjEuMC4xXCIsXG4gICAgICBcImF1cmVsaWEtbG9hZGVyXCI6IFwibnBtOmF1cmVsaWEtbG9hZGVyQDEuMC4wLWJldGEuMS4wLjFcIixcbiAgICAgIFwiYXVyZWxpYS1sb2dnaW5nXCI6IFwibnBtOmF1cmVsaWEtbG9nZ2luZ0AxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1tZXRhZGF0YVwiOiBcIm5wbTphdXJlbGlhLW1ldGFkYXRhQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXBhbFwiOiBcIm5wbTphdXJlbGlhLXBhbEAxLjAuMC1iZXRhLjEuMC4yXCIsXG4gICAgICBcImF1cmVsaWEtcGF0aFwiOiBcIm5wbTphdXJlbGlhLXBhdGhAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImF1cmVsaWEtdGFzay1xdWV1ZVwiOiBcIm5wbTphdXJlbGlhLXRhc2stcXVldWVAMS4wLjAtYmV0YS4xLjAuMVwiLFxuICAgICAgXCJhdXJlbGlhLXRlbXBsYXRpbmdcIjogXCJucG06YXVyZWxpYS10ZW1wbGF0aW5nQDEuMC4wLWJldGEuMS4wLjNcIixcbiAgICAgIFwiY29yZS1qc1wiOiBcIm5wbTpjb3JlLWpzQDEuMi42XCJcbiAgICB9LFxuICAgIFwibnBtOmF1cmVsaWEtaGlzdG9yeS1icm93c2VyQDEuMC4wLWJldGEuMS4wLjFcIjoge1xuICAgICAgXCJhdXJlbGlhLWhpc3RvcnlcIjogXCJucG06YXVyZWxpYS1oaXN0b3J5QDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXBhbFwiOiBcIm5wbTphdXJlbGlhLXBhbEAxLjAuMC1iZXRhLjEuMC4yXCIsXG4gICAgICBcImNvcmUtanNcIjogXCJucG06Y29yZS1qc0AxLjIuNlwiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLWxvYWRlci1kZWZhdWx0QDEuMC4wLWJldGEuMS4wLjJcIjoge1xuICAgICAgXCJhdXJlbGlhLWxvYWRlclwiOiBcIm5wbTphdXJlbGlhLWxvYWRlckAxLjAuMC1iZXRhLjEuMC4xXCIsXG4gICAgICBcImF1cmVsaWEtbWV0YWRhdGFcIjogXCJucG06YXVyZWxpYS1tZXRhZGF0YUAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1wYWxcIjogXCJucG06YXVyZWxpYS1wYWxAMS4wLjAtYmV0YS4xLjAuMlwiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLWxvYWRlckAxLjAuMC1iZXRhLjEuMC4xXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1tZXRhZGF0YVwiOiBcIm5wbTphdXJlbGlhLW1ldGFkYXRhQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXBhdGhcIjogXCJucG06YXVyZWxpYS1wYXRoQDEuMC4wLWJldGEuMVwiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLWxvZ2dpbmctY29uc29sZUAxLjAuMC1iZXRhLjFcIjoge1xuICAgICAgXCJhdXJlbGlhLWxvZ2dpbmdcIjogXCJucG06YXVyZWxpYS1sb2dnaW5nQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXBhbFwiOiBcIm5wbTphdXJlbGlhLXBhbEAxLjAuMC1iZXRhLjEuMC4yXCJcbiAgICB9LFxuICAgIFwibnBtOmF1cmVsaWEtbWV0YWRhdGFAMS4wLjAtYmV0YS4xXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1wYWxcIjogXCJucG06YXVyZWxpYS1wYWxAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgICAgXCJjb3JlLWpzXCI6IFwibnBtOmNvcmUtanNAMS4yLjZcIlxuICAgIH0sXG4gICAgXCJucG06YXVyZWxpYS1wYWwtYnJvd3NlckAxLjAuMC1iZXRhLjEuMC4zXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1wYWxcIjogXCJucG06YXVyZWxpYS1wYWxAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgICAgXCJjb3JlLWpzXCI6IFwibnBtOmNvcmUtanNAMS4yLjZcIlxuICAgIH0sXG4gICAgXCJucG06YXVyZWxpYS1yb3V0ZS1yZWNvZ25pemVyQDEuMC4wLWJldGEuMVwiOiB7XG4gICAgICBcImF1cmVsaWEtcGF0aFwiOiBcIm5wbTphdXJlbGlhLXBhdGhAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImNvcmUtanNcIjogXCJucG06Y29yZS1qc0AxLjIuNlwiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLXJvdXRlckAxLjAuMC1iZXRhLjEuMC4xXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiOiBcIm5wbTphdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uQDEuMC4wLWJldGEuMS4wLjFcIixcbiAgICAgIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI6IFwibnBtOmF1cmVsaWEtZXZlbnQtYWdncmVnYXRvckAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1oaXN0b3J5XCI6IFwibnBtOmF1cmVsaWEtaGlzdG9yeUAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1sb2dnaW5nXCI6IFwibnBtOmF1cmVsaWEtbG9nZ2luZ0AxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1wYXRoXCI6IFwibnBtOmF1cmVsaWEtcGF0aEAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1yb3V0ZS1yZWNvZ25pemVyXCI6IFwibnBtOmF1cmVsaWEtcm91dGUtcmVjb2duaXplckAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiY29yZS1qc1wiOiBcIm5wbTpjb3JlLWpzQDEuMi42XCJcbiAgICB9LFxuICAgIFwibnBtOmF1cmVsaWEtdGFzay1xdWV1ZUAxLjAuMC1iZXRhLjEuMC4xXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1wYWxcIjogXCJucG06YXVyZWxpYS1wYWxAMS4wLjAtYmV0YS4xLjAuMlwiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLXRlbXBsYXRpbmctYmluZGluZ0AxLjAuMC1iZXRhLjEuMC4yXCI6IHtcbiAgICAgIFwiYXVyZWxpYS1iaW5kaW5nXCI6IFwibnBtOmF1cmVsaWEtYmluZGluZ0AxLjAuMC1iZXRhLjEuMC41XCIsXG4gICAgICBcImF1cmVsaWEtbG9nZ2luZ1wiOiBcIm5wbTphdXJlbGlhLWxvZ2dpbmdAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImF1cmVsaWEtdGVtcGxhdGluZ1wiOiBcIm5wbTphdXJlbGlhLXRlbXBsYXRpbmdAMS4wLjAtYmV0YS4xLjAuM1wiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzQDEuMC4wLWJldGEuMS4wLjRcIjoge1xuICAgICAgXCJhdXJlbGlhLWJpbmRpbmdcIjogXCJucG06YXVyZWxpYS1iaW5kaW5nQDEuMC4wLWJldGEuMS4wLjVcIixcbiAgICAgIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiOiBcIm5wbTphdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uQDEuMC4wLWJldGEuMS4wLjFcIixcbiAgICAgIFwiYXVyZWxpYS1sb2FkZXJcIjogXCJucG06YXVyZWxpYS1sb2FkZXJAMS4wLjAtYmV0YS4xLjAuMVwiLFxuICAgICAgXCJhdXJlbGlhLWxvZ2dpbmdcIjogXCJucG06YXVyZWxpYS1sb2dnaW5nQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXBhbFwiOiBcIm5wbTphdXJlbGlhLXBhbEAxLjAuMC1iZXRhLjEuMC4yXCIsXG4gICAgICBcImF1cmVsaWEtcGF0aFwiOiBcIm5wbTphdXJlbGlhLXBhdGhAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImF1cmVsaWEtdGFzay1xdWV1ZVwiOiBcIm5wbTphdXJlbGlhLXRhc2stcXVldWVAMS4wLjAtYmV0YS4xLjAuMVwiLFxuICAgICAgXCJhdXJlbGlhLXRlbXBsYXRpbmdcIjogXCJucG06YXVyZWxpYS10ZW1wbGF0aW5nQDEuMC4wLWJldGEuMS4wLjNcIixcbiAgICAgIFwiY29yZS1qc1wiOiBcIm5wbTpjb3JlLWpzQDEuMi42XCJcbiAgICB9LFxuICAgIFwibnBtOmF1cmVsaWEtdGVtcGxhdGluZy1yb3V0ZXJAMS4wLjAtYmV0YS4xLjAuNVwiOiB7XG4gICAgICBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjogXCJucG06YXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbkAxLjAuMC1iZXRhLjEuMC4xXCIsXG4gICAgICBcImF1cmVsaWEtbG9nZ2luZ1wiOiBcIm5wbTphdXJlbGlhLWxvZ2dpbmdAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImF1cmVsaWEtbWV0YWRhdGFcIjogXCJucG06YXVyZWxpYS1tZXRhZGF0YUAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1wYWxcIjogXCJucG06YXVyZWxpYS1wYWxAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgICAgXCJhdXJlbGlhLXBhdGhcIjogXCJucG06YXVyZWxpYS1wYXRoQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXJvdXRlclwiOiBcIm5wbTphdXJlbGlhLXJvdXRlckAxLjAuMC1iZXRhLjEuMC4xXCIsXG4gICAgICBcImF1cmVsaWEtdGVtcGxhdGluZ1wiOiBcIm5wbTphdXJlbGlhLXRlbXBsYXRpbmdAMS4wLjAtYmV0YS4xLjAuM1wiXG4gICAgfSxcbiAgICBcIm5wbTphdXJlbGlhLXRlbXBsYXRpbmdAMS4wLjAtYmV0YS4xLjAuM1wiOiB7XG4gICAgICBcImF1cmVsaWEtYmluZGluZ1wiOiBcIm5wbTphdXJlbGlhLWJpbmRpbmdAMS4wLjAtYmV0YS4xLjAuNVwiLFxuICAgICAgXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI6IFwibnBtOmF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25AMS4wLjAtYmV0YS4xLjAuMVwiLFxuICAgICAgXCJhdXJlbGlhLWxvYWRlclwiOiBcIm5wbTphdXJlbGlhLWxvYWRlckAxLjAuMC1iZXRhLjEuMC4xXCIsXG4gICAgICBcImF1cmVsaWEtbG9nZ2luZ1wiOiBcIm5wbTphdXJlbGlhLWxvZ2dpbmdAMS4wLjAtYmV0YS4xXCIsXG4gICAgICBcImF1cmVsaWEtbWV0YWRhdGFcIjogXCJucG06YXVyZWxpYS1tZXRhZGF0YUAxLjAuMC1iZXRhLjFcIixcbiAgICAgIFwiYXVyZWxpYS1wYWxcIjogXCJucG06YXVyZWxpYS1wYWxAMS4wLjAtYmV0YS4xLjAuMlwiLFxuICAgICAgXCJhdXJlbGlhLXBhdGhcIjogXCJucG06YXVyZWxpYS1wYXRoQDEuMC4wLWJldGEuMVwiLFxuICAgICAgXCJhdXJlbGlhLXRhc2stcXVldWVcIjogXCJucG06YXVyZWxpYS10YXNrLXF1ZXVlQDEuMC4wLWJldGEuMS4wLjFcIixcbiAgICAgIFwiY29yZS1qc1wiOiBcIm5wbTpjb3JlLWpzQDEuMi42XCJcbiAgICB9LFxuICAgIFwibnBtOmJhYmVsLXJ1bnRpbWVANS44LjM0XCI6IHtcbiAgICAgIFwicHJvY2Vzc1wiOiBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLXByb2Nlc3NAMC4xLjJcIlxuICAgIH0sXG4gICAgXCJucG06Y29yZS1qc0AxLjIuNlwiOiB7XG4gICAgICBcImZzXCI6IFwiZ2l0aHViOmpzcG0vbm9kZWxpYnMtZnNAMC4xLjJcIixcbiAgICAgIFwicGF0aFwiOiBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLXBhdGhAMC4xLjBcIixcbiAgICAgIFwicHJvY2Vzc1wiOiBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLXByb2Nlc3NAMC4xLjJcIixcbiAgICAgIFwic3lzdGVtanMtanNvblwiOiBcImdpdGh1YjpzeXN0ZW1qcy9wbHVnaW4tanNvbkAwLjEuMFwiXG4gICAgfSxcbiAgICBcIm5wbTpmb250LWF3ZXNvbWVANC41LjBcIjoge1xuICAgICAgXCJjc3NcIjogXCJnaXRodWI6c3lzdGVtanMvcGx1Z2luLWNzc0AwLjEuMjBcIlxuICAgIH0sXG4gICAgXCJucG06aW5oZXJpdHNAMi4wLjFcIjoge1xuICAgICAgXCJ1dGlsXCI6IFwiZ2l0aHViOmpzcG0vbm9kZWxpYnMtdXRpbEAwLjEuMFwiXG4gICAgfSxcbiAgICBcIm5wbTpwYXRoLWJyb3dzZXJpZnlAMC4wLjBcIjoge1xuICAgICAgXCJwcm9jZXNzXCI6IFwiZ2l0aHViOmpzcG0vbm9kZWxpYnMtcHJvY2Vzc0AwLjEuMlwiXG4gICAgfSxcbiAgICBcIm5wbTpwcm9jZXNzQDAuMTEuMlwiOiB7XG4gICAgICBcImFzc2VydFwiOiBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLWFzc2VydEAwLjEuMFwiXG4gICAgfSxcbiAgICBcIm5wbTp1dGlsQDAuMTAuM1wiOiB7XG4gICAgICBcImluaGVyaXRzXCI6IFwibnBtOmluaGVyaXRzQDIuMC4xXCIsXG4gICAgICBcInByb2Nlc3NcIjogXCJnaXRodWI6anNwbS9ub2RlbGlicy1wcm9jZXNzQDAuMS4yXCJcbiAgICB9XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
