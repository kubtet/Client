import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/_models/BookDetails';
import { BooksService } from 'src/app/_services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: BookDetails | undefined;

  constructor(private booksService: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook() {
    const id = (Number)(this.route.snapshot.paramMap.get('id'));
    if(!id) return;
    this.booksService.getBook(id).subscribe({
      next: book => this.book = book
    })
  }

}
