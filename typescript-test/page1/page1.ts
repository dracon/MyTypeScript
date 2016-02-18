import {Component} from 'angular2/core';
import {SubPage1} from './sub-page1';

@Component ({
  selector: 'page-one',
  template: `
    <h1>Hallo {{name}}</h1>
    <sub-page1></sub-page1>
  `,
  directives: [SubPage1]
})
export class Page1{
  name:string = "Page 1";
}
