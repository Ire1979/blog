import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPosts: Post[];


  constructor() {
    this.arrPosts = [
      {
        id: 0,
        titulo: 'Origen del Boston Terrier',
        texto: 'El origen de la raza está en EE.UU. a finales del siglo XIX, cuando se cruzó el terrier inglés, una raza que ya no existe, con bulldogs ingleses. Más tarde también se unieron los bulldogs franceses a la línea genealógica del boston terrier. Debe su nombre a la ciudad de Boston, donde se exibió por primera vez esta raza. Estos perros llegaron a Europa en 1927 y aunque ha adquirido popularidad en los últimos años, no es una raza muy frecuente de ver.',
        autor: 'Gotham',
        imagen: 'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=460,height=600,fit=cover/animal/breed/pictures/6166a6947cef1669106860.jpg',
        fecha: new Date('2020-03-23'),
        categoria: 'General'
      },
      {
        id: 1,
        titulo: 'Llegada del cachorro a casa',
        texto: '',
        autor: 'Gotham',
        imagen: 'https://img.freepik.com/fotos-premium/lindos-cachorros-boston-terrier-duermen-manta-punto-rosa-mascotas-maravillosas-emocion-tierna-perro-foto-alta-calidad_444187-858.jpg?w=2000',
        fecha: new Date('2020-06-03'),
        categoria: 'Cachorros'
      },
      {
        id: 2,
        titulo: 'Cuidados básicos del Boston',
        texto: 'Son perros bastante limpios por lo que cepillarlos con una manopla una vez a la semana y un baño al mes, es suficiente. También es importante, limpiar periódicamente las orejas para prevenir otitis así como cortarle las uñas con regularidad. Hay que prestar especial atención a los ojos, por eso se recomienda limpiarlos para evitar infecciones.',
        autor: 'Gotham',
        imagen: 'https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5b28cb645bafe81d1017c411/15-boston-terrier-perro-banandose-en-banera-rosa.jpg',
        fecha: new Date('2020-05-10'),
        categoria: 'Salud y Nutrición'
      },
      {
        id: 3,
        titulo: 'Características físicas',
        texto: 'El Boston Terrier es un perro pequeño, fuerte y musculado de hocico achatado y cuadrado y con orejas erectas. Tiene los ojos grandes y redondos y de color oscuro. El pelo es corto y brillante de color negro o atrigado y blanco. El peso oscila entre los 6kg y los 11kg',
        autor: 'Gotham',
        imagen: 'https://www.hundeo.com/wp-content/uploads/2019/07/Boston-Terrier-5.jpg',
        fecha: new Date('2020-03-24'),
        categoria: 'General'
      },
      {
        id: 4,
        titulo: 'Personalidad del Boston Terrier',
        texto: 'Es un perro extremadamente inteligente, juguetón, sociable y cariñoso aunque también puede llegar a ser muy testarudo. Es fácil de adiestrar ya que le gusta aprender y sólo ladra cuando es necesario.',
        autor: 'Gotham',
        imagen: 'https://pamipe.com/wiki/wp-content/uploads/2022/09/Boston-terrier-3.jpg',
        fecha: new Date('2020-04-05'),
        categoria: 'General'
      },

      {
        id: 5,
        titulo: 'Principales problemas de salud',
        texto: 'Esta raza tiene tendencia a padecer enfermedades oculares como cataratas, luxaciones de rodilla y sordera, así como dificultad para respirar al ser perros branquicéfalos.',
        autor: 'Gotham',
        imagen: 'https://media.istockphoto.com/id/1211386760/es/foto/m%C3%A9dico-veterinario-que-examen-el-coraz%C3%B3n-del-perro-boston-terrier-con-estetoscopio.jpg?s=612x612&w=0&k=20&c=jD4TJSad_syEZC2EU96mOacoCHPPGw7U6Upe_KQCVRE=',
        fecha: new Date('2020-06-03'),
        categoria: 'Salud y Nutrición'
      },
      {
        id: 6,
        titulo: 'Actividad física',
        texto: 'No son perros que deban quemar una gran cantidad de energía. Necesitarán salir unas tres veces al día para estirar las patas, explorar y relacionarse. Los paseos de unos veinte minutos más algunas excursiones ocasionales suelen ser suficientes para mantenerlos estimulados y felices. ',
        autor: 'Gotham',
        imagen: 'https://blogstudio.s3.amazonaws.com/frenchiestore/cab348dd7dcc9f3982e847f55fbf51d6.jpg',
        fecha: new Date('2020-07-07'),
        categoria: 'Salud y Nutrición'
      },
      {
        id: 7,
        titulo: 'Alimentación',
        texto: 'Los boston tienden al sobrepeso, por eso necesitan una alimentación equilibrada, rica en proteinas que fortalezca su musculatura y un porcentaje controlado de carbohidratos así como evitar los cereales para no contribuir a ese sobrepeso.',
        autor: 'Gotham',
        imagen: 'https://vidaconmascotas.com/wp-content/uploads/2021/02/1614073445_Nutricion-del-Boston-Terrier-que-alimentarlo-y-que-alimentos-evitar.jpg',
        fecha: new Date('2020-11-11'),
        categoria: 'Salud y Nutrición'
      }

    ]
  }

  getAllPosts(): Post[] {
    let postsLS = [];
    if (localStorage.getItem('posts')) {
      postsLS = JSON.parse(localStorage.getItem('posts')!);
      return postsLS;
    } else {
      return this.arrPosts;
    }

  }

  getCategories(): string[] {
    const categoriasRep = this.arrPosts.map(post => post.categoria);
    return [...new Set(categoriasRep)];
  }

  filterByCategory(pCategory: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === pCategory);
  }

  createPost(pPost: Post) {
    this.arrPosts.push(pPost);
    const strPosts = JSON.stringify(this.arrPosts);
    localStorage.setItem('posts', strPosts);
    console.log(pPost)
  }

  getById(pId: number): Post | undefined {
    return this.arrPosts.find(post => post.id === pId);
  }

}
