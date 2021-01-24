import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  movieName: string = '';
  movieGenre: string = '';
  movieDirector: string = '';
  @Output() movieCreated = new EventEmitter<{movieName: string, movieGenre: string, movieDirector: string}>();
  @Output() movieCopy = new EventEmitter<{movieName: string, movieGenre: string, movieDirector: string}>();

  constructor() { }

  ngOnInit(): void {
    
  }

  onAddMovie(){
    this.movieCreated.emit({
      movieName: 'Scam 1992',
      movieGenre: 'Drama',
      movieDirector: 'Hansal Mehta'
    });
  }
  onCopyMovie(){
    this.movieCopy.emit({
      movieName: 'Turbo 77',
      movieGenre: 'Adventure',
      movieDirector: 'George Clooney'
    });
  }
}
