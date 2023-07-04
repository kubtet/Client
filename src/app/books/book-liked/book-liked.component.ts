import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/_models/Book';
import { BooksService } from 'src/app/_services/books.service';

@Component({
  selector: 'app-book-liked',
  templateUrl: './book-liked.component.html',
  styleUrls: ['./book-liked.component.css']
})
export class BookLikedComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getLikedBooks();
  }

  getLikedBooks() {
    this.bookService.getLiked().subscribe({
      next: books => {
        this.books = books
      }
    })
  }

}
