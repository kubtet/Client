import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/_models/Book';
import { BooksService } from 'src/app/_services/books.service';

@Component({
  selector: 'app-book-toread',
  templateUrl: './book-toread.component.html',
  styleUrls: ['./book-toread.component.css', '../book-liked/book-liked.component.css']
})
export class BookToreadComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getBooksToRead();
  }

  getBooksToRead() {
    this.bookService.getBooksToRead().subscribe({
      next: books => {
        this.books = books
      }
    })
  }
}