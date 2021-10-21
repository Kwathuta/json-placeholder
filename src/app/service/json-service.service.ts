import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Posts } from '../posts';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
  posts!: Posts[];

  constructor(private http: HttpClient) { }

  postsRequest() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

