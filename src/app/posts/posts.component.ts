import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Post } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  providers: [PostService],
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => { this.posts = posts ; console.log(this.posts)})
  }
}
