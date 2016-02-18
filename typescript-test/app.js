System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './page1/page1'], function(exports_1) {
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
    var core_1, browser_1, router_1, page1_1;
    var HelloApp;
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
            }],
        execute: function() {
            HelloApp = (function () {
                function HelloApp() {
                    this.name = "Wolfgang";
                }
                HelloApp = __decorate([
                    core_1.Component({
                        selector: 'typo-app',
                        template: "\n  <header>\n    <div class=\"header\">\n        <a [routerLink]=\"['Home']\">home</a>\n        <a [routerLink]=\"['Page1']\">page 1</a>\n    </div>\n  </header>\n  <router-outlet></router-outlet>\n    <h1>Hallo {{name}}</h1>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: HelloApp },
                        { path: '/page1', name: 'Page1', component: page1_1.Page1 }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HelloApp);
                return HelloApp;
            }());
            exports_1("HelloApp", HelloApp);
            browser_1.bootstrap(HelloApp, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map