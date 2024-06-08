import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  updates = [
    {
      title: 'Próxima versión 2.0',
      date: new Date('2024-06-25'),
      description:
        'Estamos trabajando en la versión 2.0 que incluirá nuevo temario como FOL (Formación y Orientación Laboral) y EIE (Empresa e Iniciativa Emprendedora)',
    },
    {
      title: 'Mejoras en la interfaz',
      date: new Date('2024-08-01'),
      description:
        'La próxima actualización traerá mejoras significativas en la interfaz de usuario para facilitar la navegación y la posibilidad de hacer apuntes desde la app.',
    },
  ];

  articles = [
    {
      title: 'Tendencias educativas y tecnológicas de 2024',
      date: new Date('2024-06-07'),
      excerpt:
        'El aprendizaje híbrido, la realidad aumentada y los chatbots están transformando la educación.',
      link: 'https://www.educaciontrespuntocero.com/tecnologia/tendencias-educativas-2024/',
    },
    {
      title: '6 tendencias de IA generativa en educación para 2024',
      date: new Date('2023-12-21'),
      excerpt:
        'La inteligencia artificial generativa está revolucionando la educación mediante la creación de contenido y la personalización del aprendizaje.',
      link: 'https://blogs.uoc.edu/elearning-innovation-center/es/6-tendencias-de-ia-generativa-en-educacion-para-2024-posibilidades-de-uso-y-riesgos/',
    },
    {
      title: 'Retos y beneficios de la tecnología en la educación',
      date: new Date('2024-05-28'),
      excerpt:
        'La tecnología mejora la comprensión y personalización del aprendizaje, aunque presenta desafíos económicos y de salud.',
      link: 'https://www.mundana.us/blog/tecnologia-en-la-educacion',
    },
  ];
}
