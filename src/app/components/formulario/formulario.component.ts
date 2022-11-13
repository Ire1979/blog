import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  fechaActual: Date;
  categorias: string[];


  constructor(private blogService: BlogService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern(/\b(https?:\/\/.*?\.[a-z]{2,4}\/[^\s]*\b)/)
      ]),
      fecha: new FormControl(),
      categoria: new FormControl('', [
        Validators.required
      ])
    });

    this.fechaActual = new Date();

    this.categorias = [];

  }

  ngOnInit(): void {
    this.categorias = this.blogService.getCategories();
  }

  onSubmit() {
    this.blogService.createPost(this.formulario.value);
    this.router.navigate(['/posts']);
  }

  checkError(field: string, error: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }



}