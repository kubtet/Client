import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookLikedComponent } from './books/book-liked/book-liked.component';
import { BookToreadComponent } from './books/book-toread/book-toread.component';
import { BookFinishedComponent } from './books/book-finished/book-finished.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookAddCoverComponent } from './books/book-add-cover/book-add-cover.component';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BookListComponent, canActivate: [AuthGuard]},
  {path: 'books/:id', component: BookDetailComponent, canActivate: [AuthGuard]},
  {path: 'add', component: BookAddComponent, canActivate: [AuthGuard]},
  {path: 'delete', component: BookDeleteComponent, canActivate: [AuthGuard]},
  {path: 'addCover', component: BookAddCoverComponent, canActivate: [AuthGuard]},
  {path: 'liked', component: BookLikedComponent, canActivate: [AuthGuard]},
  {path: 'toread', component: BookToreadComponent, canActivate: [AuthGuard]},
  {path: 'finished', component: BookFinishedComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
