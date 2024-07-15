import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {path: '/*', component: AppComponent},
    {path: '/details', component: DetailComponent},
];
