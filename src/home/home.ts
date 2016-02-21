import {Component} from 'angular2/core';

@Component({
  selector: "home",
  template: `
  <h1>Welcome {{title}}</h1>
  <p>An app for testing of TypeScript, Angular2 and Semantic UI</p>
  `
})

export class Home{
  title = "Home";
}
