import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrl: './contactos-list.component.css',
})
export class ContactosListComponent implements OnInit {
  contacts: any[] = [];

  constructor(private contactoService: ContactoService) {}

  ngOnInit() {
    this.contacts = this.contactoService.getContacts();
  }
}
