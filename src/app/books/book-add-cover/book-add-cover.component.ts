import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { BookDetails } from 'src/app/_models/BookDetails';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account.service';
import { BooksService } from 'src/app/_services/books.service';
import { CoverService } from 'src/app/_services/cover.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-add-cover',
  templateUrl: './book-add-cover.component.html',
  styleUrls: ['./book-add-cover.component.css']
})
export class BookAddCoverComponent implements OnInit {
  uploader: FileUploader | undefined;
  user: User | undefined;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  book: BookDetails = new BookDetails();

  constructor(private route: ActivatedRoute, private bookService: BooksService, private coverService: CoverService, private accountService: AccountService, private toastr: ToastrService, private router: Router) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if (user) {
          this.user = user
        }
      }
    })
  }

  ngOnInit(): void {
    this.book = history.state.book;
    console.log(this.book);

    this.initializeUploader();
  }

  fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'books/add',
      authToken: 'Bearer ' + this.user?.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false
    }

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const photo = JSON.parse(response);
        this.book.coverPath = photo;
      }
    }
  }

  uploadCover() {
    const file = this.uploader!.queue[0]._file;
  
    this.coverService.addCover(file, this.book.id).subscribe({
      next: () => {
        this.toastr.success('Cover uploaded successfully');
        this.router.navigateByUrl('');
      },
      error: (error) => {
        this.toastr.error('Error uploading cover!');
      }
    });
  }
}