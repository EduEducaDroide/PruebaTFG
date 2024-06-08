import { Component } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.css',
})
export class CaracteristicasComponent {
  features = [
    {
      title: 'Acceso a Libros Actualizados',
      description:
        'Poder tener siempre a mano datos actualizados de las asignaturas.',
      imagen:
        'https://images.vexels.com/content/224155/preview/book-on-screen-logo-18da5b.png',
    },
    {
      title: 'Gratuita',
      description: 'Disfruta de acceso completo al contenido sin ningún costo.',
      imagen: 'https://arcadiapps.es/wp-content/uploads/2016/02/Gratis.png',
    },
    {
      title: 'Interfaz Intuitiva',
      description:
        'Navegación fácil y amigable, adecuada para todas las edades.',
      imagen: 'https://cdn-icons-png.flaticon.com/512/5292/5292223.png',
    },
    {
      title: 'Idiomas',
      description: 'Disponible al completo en una variedad de idiomas.',
      imagen: 'https://cdn-icons-png.flaticon.com/512/3898/3898082.png',
    },
    {
      title: 'Pruebas',
      description:
        'Acceso a test al acabar cada temario para afianzar los conocimientos.',
      imagen:
        'https://www.seekpng.com/png/full/67-671437_png-test-image-vector-library-download-test-png.png',
    },
  ];
}
