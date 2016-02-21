import {Component, provide, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {
  Route,
  RouteConfig,
  RouterOutlet,
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES,
  Location,
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF} from 'angular2/router';
import {Page1} from './page1/page1';
import {Home} from './home/home';
import {HighLightDirective} from './directives/highlight.directive';

@Component({
  selector: 'typo-app',
  template: `
  <div class="ui sixteen wide column">
    <h1 [myHighLight]=color class="ui header">{{sitename}}</h1>
  </div>
  <div class="ui doubling two column row">
  <div class="sidebar eight wide tablett four wide computer column">
    <div class="ui vertical menu sixteen wide column">
      <a class="item" [routerLink]="['Home']">Home</a>
      <a class="item" [routerLink]="['Page1']">Login</a>
    </div>
  </div>
  <div class="article eight wide tablett twelve wide computer column">
    <router-outlet></router-outlet>
  </div>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, HighLightDirective],
  providers: [ROUTER_PROVIDERS, Location]
})

@RouteConfig([
  {path: "/",       redirectTo: ["Home"]},
  {path: "/home",   name:"Home",    component: Home},
  {path: "/page1",  name: "Page1",  component: Page1}
])

export class TypoApp{
  sitename = "TypeScript testapp";
  color = "#d6de68";
}

bootstrap(TypoApp, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), provide(APP_BASE_HREF, {useValue: '/#b2v'})]);
