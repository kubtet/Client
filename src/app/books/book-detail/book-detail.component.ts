import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDetails } from 'src/app/_models/BookDetails';
import { BooksService } from 'src/app/_services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: BookDetails | undefined;

  constructor(private booksService: BooksService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook() {
    const id = (Number)(this.route.snapshot.paramMap.get('id'));
    if (!id) return;
    this.booksService.getBook(id).subscribe({
      next: book => this.book = book
    })
  }

  like() {
    this.booksService.like(this.book!.id).subscribe({
      next: () => this.toastr.success('Like')
    });
  }

  addToRead() {
    this.booksService.addToRead(this.book!.id).subscribe({
      next: () => this.toastr.success('To read')
    })
  }

  addAsRead() {
    this.booksService.addAsRead(this.book!.id).subscribe({
      next: () => this.toastr.success('Read')
    })
  }

}
