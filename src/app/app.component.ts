import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EducaDroideTFG';
  email = 'educadroide.contact@gmail.com';
  direccion = 'C. Estocolmo, 1 Bis, 28922 Alcorcón, Madrid';

  private lastClickedStar: HTMLElement | null = null;
  private clickTimeout: any;

  handleClick(event: Event): void {
    const clickedStar = event.target as HTMLElement;

    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
      this.clickTimeout = null;
    }

    if (this.lastClickedStar === clickedStar) {
      this.clearStars();
      this.lastClickedStar = null;
    } else {
      this.lastClickedStar = clickedStar;
      this.clickTimeout = setTimeout(() => {
        this.lastClickedStar = null;
      }, 2000);
    }
  }

  private clearStars(): void {
    const starInputs = document.querySelectorAll('.rating input');
    starInputs.forEach((input) => {
      (input as HTMLInputElement).checked = false;
    });
  }
}
