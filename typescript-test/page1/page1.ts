import {Component} from 'angular2/core';

@Component ({
  selector: 'page-one',
  template: `
    <h1>Hallo {{name}}</h1>
  `
})
export class Page1{
  name:string = "Page 1";
}
