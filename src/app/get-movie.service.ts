import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from './movieDetail';


@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
 

  constructor(private http: HttpClient) { 
    
  }
  getMoviesList(): Observable<any[]> {
    return this.http
      .get<any[]>('movies');
  }

  getMovieById(movieId: string): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>('/movies/' + movieId);
  }



}
