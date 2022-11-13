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
  categorias: string[];
  active: boolean;




  constructor(private blogService: BlogService) {
    this.posts = [];
    this.categorias = [];
    this.active = false;
  }

  ngOnInit(): void {
    this.posts = this.blogService.getAllPosts();
    this.categorias = this.blogService.getCategories();

  }

  selectCategory($event: any) {
    this.active = !this.active;
    if ($event.target.value === 'todos') {
      this.posts = this.blogService.getAllPosts();
    } else {
      this.posts = this.blogService.filterByCategory($event.target.value);
    }
  }

}
