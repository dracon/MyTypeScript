System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './page1/page1', './home/home', './directives/highlight.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, page1_1, home_1, highlight_directive_1;
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
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            TypoApp = (function () {
                function TypoApp() {
                    this.sitename = "TypeScript testapp";
                    this.color = "#d6de68";
                }
                TypoApp = __decorate([
                    core_1.Component({
                        selector: 'typo-app',
                        template: "\n  <div class=\"ui sixteen wide column\">\n    <h1 [myHighLight]=color class=\"ui header\">{{sitename}}</h1>\n  </div>\n  <div class=\"ui doubling two column row\">\n  <div class=\"sidebar eight wide tablett four wide computer column\">\n    <div class=\"ui vertical menu sixteen wide column\">\n      <a class=\"item\" [routerLink]=\"['Home']\">Home</a>\n      <a class=\"item\" [routerLink]=\"['Page1']\">Login</a>\n    </div>\n  </div>\n  <div class=\"article eight wide tablett twelve wide computer column\">\n    <router-outlet></router-outlet>\n  </div>\n  </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, highlight_directive_1.HighLightDirective],
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
            })();
            exports_1("TypoApp", TypoApp);
            browser_1.bootstrap(TypoApp, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), core_1.provide(router_1.APP_BASE_HREF, { useValue: '/#b2v' })]);
        }
    }
});
//# sourceMappingURL=app.js.map