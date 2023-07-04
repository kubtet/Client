import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Author } from 'src/app/_models/Author';
import { Book } from 'src/app/_models/Book';
import { BookCreate } from 'src/app/_models/BookCreate';
import { BookDetails } from 'src/app/_models/BookDetails';
import { Genre } from 'src/app/_models/Genre';
import { AuthorService } from 'src/app/_services/author.service';
import { BooksService } from 'src/app/_services/books.service';
import { GenreService } from 'src/app/_services/genre.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book = new BookCreate();
  bookDetails = new BookDetails();
  bookGenres: Genre[] = [];
  author = new Author();
  disabledBookBtn: boolean = true;
  bookCreated: boolean = false;

  authors: Author[] = [];
  existingAuthor = new Author;
  authorId: number = 0;
  authorDone = false;
  disabledAuthorBtn: boolean = true;

  genres: Genre[] = [];
  genre = new Genre();
  genreId: number = 0;
  disabledGenreBtn: boolean = true;

  baseUrl = environment.apiUrl;

  constructor(private authorService: AuthorService, private genreService: GenreService, private bookService: BooksService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAuthors();
    this.getAllGenres();
  }

  addBook() {
    this.book.authorId = this.authorId;
    this.book.genresId = this.bookGenres.map(genre => genre.id);

    this.bookService.create(this.book).pipe(take(1)).subscribe({
      next: book => {
        this.toastr.success("Book added properly");
        this.bookDetails = book;
        console.log(this.bookDetails);
        this.router.navigateByUrl('addCover', {state: {book: this.bookDetails}});
      },
      error: error => {
        this.toastr.error("Something went wrong");
      }
    });
  }

  checkBook() {
    if (this.book.title !== '' && this.book.isbn !== '' && this.book.description !== '' && this.book.publish_date !== '') {
      this.disabledBookBtn = false;
    }
    else {
      this.disabledBookBtn = true;
    }
  }

  addGenre() {
    if (!this.genres.find(x => x.name === this.genre.name) && !this.bookGenres.find(x => x.name === this.genre.name)) {
      this.genreService.create(this.genre).pipe(take(1)).subscribe({
        next: createdGenre => {
          this.genres.push(createdGenre);
          this.bookGenres.push({ ...createdGenre }); // Create a new instance of the genre object
          this.toastr.success("Genre added properly");
        }
      });
    } else {
      this.genreId = (Number)(this.genres.find(x => x.name === this.genre.name)?.id);
      this.genreService.getById(this.genreId).subscribe({
        next: genre => {
          this.genre = genre;
          this.bookGenres.push({ ...genre }); // Create a new instance of the genre object
          this.toastr.success("Genre added properly");
        }
      });
    }
  }


  checkGenre() {
    if (this.genre.name !== '') {
      this.disabledGenreBtn = false;
    }
    else {
      this.disabledGenreBtn = true;
    }
  }

  getAllGenres() {
    this.genreService.getAllGenres().subscribe({
      next: response => {
        this.genres = response
      }
    })
  }

  getAllAuthors() {
    this.authorService.getAll().subscribe({
      next: response => {
        this.authors = response
      }
    })
  }

  addAuthor() {
    if (this.authors.find(x => x.name === this.author.name && x.surname === this.author.surname)) {
      this.authorId = (Number)(this.authors.find(x => x.name === this.author.name && x.surname === this.author.surname)?.id);
      this.authorService.getById(this.authorId).subscribe({
        next: author => {
          this.author = author
        }
      })
    }
    else {
      this.authorService.create(this.author).pipe(take(1)).subscribe();
    }
    this.authorDone = true;
    this.disabledAuthorBtn = true;
    this.toastr.success("Author added properly");
  }

  async checkAuthor() {
    if (this.author.name !== '' && this.author.surname !== '' && this.author.country !== '') {
      this.disabledAuthorBtn = false;
    }
    else {
      this.disabledAuthorBtn = true;
    }
  }
}