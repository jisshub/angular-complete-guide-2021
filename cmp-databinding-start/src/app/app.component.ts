import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:Array<object> = [];

  onServerAdded(serverData: {serverName: string, serverContent: string, serverStatus: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      status: serverData.serverStatus
    })    
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverStatus: string}){
    this.serverElements.push({
      type: 'server',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      status: blueprintData.serverStatus
  });
  }
}