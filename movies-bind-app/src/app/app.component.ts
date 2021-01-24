import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-bind-app';
  movieElement: Array<object> = [];
  onMovieCreated(movieData: {movieName: string, movieGenre: string, movieDirector: string}){
    this.movieElement.push({  
      name: movieData.movieName,
      genre: movieData.movieGenre,
      director: movieData.movieDirector
    });
  }
  onMovieCopied(copyData: {movieName: string, movieGenre: string, movieDirector: string}){
    this.movieElement.push({  
      name: copyData.movieName,
      genre: copyData.movieGenre,
      director: copyData.movieDirector
    });
  }
}
