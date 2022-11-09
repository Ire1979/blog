import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  posts: Post[];

  constructor(private blogService: BlogService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.posts = this.blogService.getAll();
    console.log(this.posts);
  }

}
