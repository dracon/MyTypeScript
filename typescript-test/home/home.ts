import {Component} from 'angular2/core';

@Component({
  selector: "home",
  template: `
  <h1>Welcome {{title}}</h1>
  `
})

export class Home{
  title = "Home";
}
