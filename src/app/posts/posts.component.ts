import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../service/json-service.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private jsonService: JsonServiceService) { }


  getPosts() {
    this.jsonService.postsRequest().subscribe((response: any) => {
      this.posts = response;
      console.log(this.posts)
    })
  }
  ngOnInit(): void {
  }

}
