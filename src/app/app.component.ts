import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { GetMovieService } from './get-movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,CommonModule,RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private getMovieServices: GetMovieService) { }

  ngOnInit(): void {
    this.getMovieServices.getMoviesList().subscribe(reponse => {
      console.log(reponse);
      this.data = reponse;
    }
    )
  }
  title = 'harry-potter-movies';
  data: any;


}
