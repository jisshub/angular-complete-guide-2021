import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:Array<object> = [{
    type: "Type One",
    name: "Server One",
    content: "Content New"
  }];


}
