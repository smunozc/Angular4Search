import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
    console.log("Servicio creado");
  }

  getMovies(name: string): Observable<any> {
    let url = 'http://www.omdbapi.com/?s=' + name + '&apikey=' + environment.apikey;
    console.log(url);
    return this.http.get(url).pipe(
      map((res) => {
        console.table(res['Search']);
        return res['Search'];
      })
    )
    
  }

  getMovieSelection(id: string): Observable<any> {
    let url = 'http://www.omdbapi.com/?i=' + id + '&apikey=' + environment.apikey;
    console.log(url);
    return this.http.get(url).pipe()
  }

}
