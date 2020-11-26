import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

const routes:Routes = [
  {
    path: 'search/:code',
    component: MovieListComponent
  }
];

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    ButtonModule,
    AccordionModule
  ]
})
export class MoviesModule { }
