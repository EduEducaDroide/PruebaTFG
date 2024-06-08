import { Component } from '@angular/core';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  constructor(private contactoService: ContactoService) {}

  onSubmit() {
    this.contactoService.saveContact(this.contact);
    alert('Mensaje enviado exitosamente');
    this.contact = { name: '', email: '', phone: '', message: '' };
  }
}
