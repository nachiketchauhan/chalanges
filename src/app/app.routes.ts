import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HarryPotterMovieComponent } from './harry-potter-movie/harry-potter-movie.component';

export const routes: Routes = [
    { path: 'harrypottermovies', component: HarryPotterMovieComponent },
    { path: 'harrypottermovies/:movieId', component: DetailComponent },
    { path: '**', redirectTo: 'harrypottermovies' },
];
