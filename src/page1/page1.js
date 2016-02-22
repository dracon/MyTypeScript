System.register(['angular2/core', './sub-page1'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sub_page1_1;
    var Page1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sub_page1_1_1) {
                sub_page1_1 = sub_page1_1_1;
            }],
        execute: function() {
            Page1 = (function () {
                function Page1() {
                    this.name = "Login if you like! YES!";
                }
                Page1 = __decorate([
                    core_1.Component({
                        selector: 'page-one',
                        template: "\n    <h1>{{name}}</h1>\n    <sub-page1>Load subpage...</sub-page1>\n  ",
                        directives: [sub_page1_1.SubPage1]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Page1);
                return Page1;
            })();
            exports_1("Page1", Page1);
        }
    }
});
//# sourceMappingURL=page1.js.map