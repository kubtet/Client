import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/_models/Book';
import { BooksService } from 'src/app/_services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getBooks().subscribe({
      next: books => this.books = books
    })
  }

}
