import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from './movieDetail';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
 

  constructor(private http: HttpClient) {   
    
  }
  getMoviesList(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>('movies');
  }

  getMovieById(movieId: string): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>('/movies/' + movieId);
  }



}
