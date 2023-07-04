import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileLikeObject } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoverService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addCover(file: File, bookId: number) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.baseUrl + 'books/' + bookId + '/addCover', formData);
  }
}
