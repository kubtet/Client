import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/_models/Book';
import { BooksService } from 'src/app/_services/books.service';

@Component({
  selector: 'app-book-finished',
  templateUrl: './book-finished.component.html',
  styleUrls: ['./book-finished.component.css', '../book-liked/book-liked.component.css']
})
export class BookFinishedComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getReadBooks();
  }

  getReadBooks() {
    this.bookService.getReadBooks().subscribe({
      next: books => {
        this.books = books
      }
    })
  }
}