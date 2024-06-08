import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../service/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent implements OnInit {
  temas: any[] = [];
  preguntas: any[] = [];
  currentSlide = 0;
  currentSlide2 = 0;

  constructor(private demoService: DemoService) {}

  ngOnInit() {
    this.temas = this.demoService.getTemas();
    this.preguntas = this.demoService.getPreguntas();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.temas.length;
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.temas.length) % this.temas.length;
  }

  nextSlide2() {
    this.currentSlide2 = (this.currentSlide2 + 1) % this.preguntas.length;
  }

  previousSlide2() {
    this.currentSlide2 =
      (this.currentSlide2 - 1 + this.preguntas.length) % this.preguntas.length;
  }
}
