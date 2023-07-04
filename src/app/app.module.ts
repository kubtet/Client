import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookLikedComponent } from './books/book-liked/book-liked.component';
import { BookToreadComponent } from './books/book-toread/book-toread.component';
import { BookFinishedComponent } from './books/book-finished/book-finished.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { SharedModule } from './_modules/shared.module';
import { BookCardComponent } from './books/book-card/book-card.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookAddCoverComponent } from './books/book-add-cover/book-add-cover.component';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    BookListComponent,
    BookLikedComponent,
    BookToreadComponent,
    BookFinishedComponent,
    BookDetailComponent,
    BookCardComponent,
    BookAddComponent,
    BookAddCoverComponent,
    BookDeleteComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
