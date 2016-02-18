System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './page1/page1', './home/home'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, page1_1, home_1;
    var TypoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (page1_1_1) {
                page1_1 = page1_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            TypoApp = (function () {
                function TypoApp() {
                }
                TypoApp = __decorate([
                    core_1.Component({
                        selector: 'typo-app',
                        template: "\n  <header>\n    <nav class=\"ui three buttons navigation\">\n      <a class=\"ui button\" [routerLink]=\"['Home']\">Home</a>\n      <a class=\"ui button\" [routerLink]=\"['Page1']\">Page 1</a>\n    </nav>\n  </header>\n  <div class=\"ui container\">\n  <router-outlet></router-outlet>\n  </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, router_1.Location]
                    }),
                    router_1.RouteConfig([
                        { path: "/", redirectTo: ["Home"] },
                        { path: "/home", name: "Home", component: home_1.Home },
                        { path: "/page1", name: "Page1", component: page1_1.Page1 }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TypoApp);
                return TypoApp;
            }());
            exports_1("TypoApp", TypoApp);
            browser_1.bootstrap(TypoApp, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), core_1.provide(router_1.APP_BASE_HREF, { useValue: '/#b2v' })]);
        }
    }
});
//# sourceMappingURL=app.js.map