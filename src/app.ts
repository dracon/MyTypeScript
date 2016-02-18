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

@Component({
  selector: 'typo-app',
  template: `
  <header>
    <nav class="ui three buttons navigation">
      <a class="ui button" [routerLink]="['Home']">Home</a>
      <a class="ui button" [routerLink]="['Page1']">Page 1</a>
    </nav>
  </header>
  <div class="ui container">
  <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, Location]
})

@RouteConfig([
  {path: "/",       redirectTo: ["Home"]},
  {path: "/home",   name:"Home",    component: Home},
  {path: "/page1",  name: "Page1",  component: Page1}
])

export class TypoApp{
}

bootstrap(TypoApp, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), provide(APP_BASE_HREF, {useValue: '/#b2v'})]);
