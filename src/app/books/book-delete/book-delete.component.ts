import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/_models/Book';
import { BooksService } from 'src/app/_services/books.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css', '../book-liked/book-liked.component.css']
})
export class BookDeleteComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BooksService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: books => {
        this.books = books
      }
    })
  }

  delete() {
    this.bookService.delete();
  }

}
