import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss']
})
export class GameControlsComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any; 
  firstNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    this.interval= setInterval(() => {
      this.intervalFired.emit(this.firstNumber + 1); // emit an incrementing number
      this.firstNumber ++;
    }, 1000)
  }
  onStopGame(){
    
  }
}
