import { Component } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.css',
})
export class AcercadeComponent {
  teamMembers = [
    {
      name: 'Eric Alonso',
      role: 'Fundador y Desarrollador',
      photo: 'assets/Eric.PNG',
    },
    {
      name: 'Sergio Lasso',
      role: 'Fundador y Desarrollador',
      photo: 'assets/Sergio.jpg',
    },
  ];
}
