import {Component} from 'angular2/core';

@Component({
  selector: "home",
  template: `
  <h1>Welcome {{title}}</h1>
  <p>An app for testing of TypeScript, Angular2 and Semantic UI</p>
  <p>Every day a little bit more of interesting stuff!</p>
  <h2>Log</h2>
  <p>Installed jasmine-core for start building a testing suite<br>
  Created lite-server bs-config.json<br>
  Changed the tsconfig.json file to match the tsc -watch</p>
  `
})

export class Home{
  title = "Home";
}
