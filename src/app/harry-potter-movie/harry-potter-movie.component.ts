import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { GetMovieService } from '../get-movie.service';
import { Movie } from '../movie';
import { MtohPipe } from '../pipes/mtoh.pipe';

@Component({
  selector: 'app-harry-potter-movie',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, RouterModule, FormsModule,MtohPipe],
  templateUrl: './harry-potter-movie.component.html',
  styleUrl: './harry-potter-movie.component.css'
})
export class HarryPotterMovieComponent {
  movieTitle: string = '';
  releaseYear: number | undefined;
  data: Movie[] = [];
  erroMessage: String | undefined;

  constructor(private getMovieServices: GetMovieService) { }

  ngOnInit(): void {
    this.getHarrypotterMovieList();
  }

  getHarrypotterMovieList() {
    this.getMovieServices.getMoviesList().subscribe(reponse => {
      console.log(reponse);
      this.data = reponse;
    }, (err) => {
      this.erroMessage = err.message;
    }

    )
  }
}
