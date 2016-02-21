System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var HighLightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighLightDirective = (function () {
                function HighLightDirective(el) {
                    this.el = el;
                    this._deafultColor = 'red';
                }
                HighLightDirective.prototype.onMouseEnter = function () { this._highlight(this.highlightColor || this._deafultColor); };
                HighLightDirective.prototype.onMouseLeave = function () { this._highlight(null); };
                HighLightDirective.prototype._highlight = function (color) {
                    this.el.nativeElement.style.backgroundColor = color;
                };
                __decorate([
                    core_1.Input('myHighLight'), 
                    __metadata('design:type', String)
                ], HighLightDirective.prototype, "highlightColor", void 0);
                HighLightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighLight]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HighLightDirective);
                return HighLightDirective;
            }());
            exports_1("HighLightDirective", HighLightDirective);
        }
    }
});
//# sourceMappingURL=highlight.directive.js.map