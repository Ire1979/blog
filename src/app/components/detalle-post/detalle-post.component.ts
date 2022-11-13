import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent implements OnInit {

  detalle: Post | undefined;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const numPost = parseInt(params['pId'])
      this.detalle = this.blogService.getById(numPost);
    })
  }

}
