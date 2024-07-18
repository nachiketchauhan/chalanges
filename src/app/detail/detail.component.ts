import { Component } from '@angular/core';
import { MovieDetails } from '../movieDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMovieService } from '../get-movie.service';
import { MtohPipe } from '../pipes/mtoh.pipe';
import { CurrencyPipe } from "../pipes/currency.pipe";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MtohPipe, CurrencyPipe,MatIconModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  movie_id: string = '';
  movie:MovieDetails={
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  } ;
  erroMessage: string='';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getMovieServices: GetMovieService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((movie_id) => {
      this.movie_id = movie_id['movieId'];
    });

    this.getMovieServices.getMovieById(this.movie_id).subscribe((data) => {
      this.movie=data;
    })
  }

  backToHome():void{
    this.router.navigate(['/movies']);
  }
}
