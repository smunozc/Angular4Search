import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any = ["no leido"];
  regex: RegExp = /^([^0-9]*)$/;
  loading: boolean = true;
  selection: boolean = false;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('code');
    if(this.regex.test(this.route.snapshot.paramMap.get('code'))){
      this.moviesService.getMovies(name).subscribe(response => {
        this.movies = response;
      });
      this.loading = false;
    } else {
      this.moviesService.getMovieSelection(name).subscribe(response => {
        this.movies[0] = response;
      });
      this.loading = false;
      this.selection = true;
    }
  }

}
