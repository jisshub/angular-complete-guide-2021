import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, serverStatus: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string, serverStatus: string}>();
  newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  @ViewChild('serverStatusInp', {static: true}) serverStatusInp: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(name: HTMLInputElement) {    
    this.serverCreated.emit({serverName: name.value, serverContent: this.serverContentInput.nativeElement.value, serverStatus: this.serverStatusInp.nativeElement.value})
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: name.value, serverContent: this.serverContentInput.nativeElement.value, serverStatus: this.serverContentInput.nativeElement.value})
  }
}
