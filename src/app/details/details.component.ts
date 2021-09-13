import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../posts/posts';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  providers: [PostService],
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  id: number;
  post: Post;
  constructor(private route: ActivatedRoute, private postSrtvice: PostService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    console.log(this.id);
    this.getPostDetail(this.id)
  }
  getPostDetail(id: number) {
    this.postSrtvice.getPostDetail(id)
      .subscribe(post => { this.post = post; console.log(this.post) })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
