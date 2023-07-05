import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private bookService: BooksService, private toastr: ToastrService, private router: Router) { }

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

  delete(id: number) {
    this.bookService.delete(id).subscribe({
      next: () => {
        this.router.navigateByUrl('/delete'),
        this.toastr.success('Deleted correctly')
      },
      error: error => console.log(error)
    });
  }

}
