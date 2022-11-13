import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListaPostsComponent },
  { path: 'posts', component: ListaPostsComponent },
  { path: 'posts/:pId', component: DetallePostComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
