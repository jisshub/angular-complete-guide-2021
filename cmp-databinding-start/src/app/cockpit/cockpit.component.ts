import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer() {
    this.serverCreated.emit({serverName: "jjfgd", serverContent: "dasdasd"})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: "kjhk", serverContent: "rtyrt"})
  }
}
