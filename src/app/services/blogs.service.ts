import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(public http: HttpClient) { }

  getBlogs() {
    return this.http.get(`http://localhost:3000/blogs`)
  }
}
