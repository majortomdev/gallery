import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

//component with ' '(empty) path is the one that loads first
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'list', component: ListComponent},
    { path: 'books', component: BooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
