import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig,ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {Page1} from './page1/page1';

@Component({
  selector: 'hello-app',
  template: `
  <header>
    <div class="header">
        <a [routerLink]="['Home']">home</a>
        <a [routerLink]="['Page1']">page 1</a>
    </div>
  </header>
  <router-outlet></router-outlet>
    <h1>Hallo {{name}}</h1>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/home', name: 'Home', component: HelloApp},
  {path:'/page1', name: 'Page1', component: Page1}
])

export class HelloApp{
  name: string = "Wolfgang";
}

bootstrap(HelloApp, [ROUTER_PROVIDERS]);
