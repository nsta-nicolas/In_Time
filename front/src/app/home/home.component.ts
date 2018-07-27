import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;
  tv: string; // zone de recherche

  constructor(private api: ApiService) {
    this.api.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
      // console.log(this.upcoming_movies);
    });
  }

  ngOnInit() {}
  // searchMovie() {
  //   console.log('test affiche film');
  //   this.api.searchMovie(this.movie).subscribe(data => {
  //     this.search_result = data['results'];
  //   });
  // }
  searchSerie() {
    console.log('test affiche serie');
    this.api.searchSerie(this.tv).subscribe(data => {
      this.search_result = data['results'];
    });
  }
  // upCommingSerie() {
  //   this.api.getUpcomingMovies().subscribe(data => {
  //     this.upcoming_movies = data['results'];
  //     // console.log(this.upcoming_movies);
  //   });
  // }
}
