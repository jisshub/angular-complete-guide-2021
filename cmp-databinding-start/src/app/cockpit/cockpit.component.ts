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
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(name: HTMLInputElement) {
    this.serverCreated.emit({serverName: name.value, serverContent: "dasdasd"})
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: name.value, serverContent: "rtyrt"})
  }
}
