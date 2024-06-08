import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private contacts: any[] = [];
  private votes: any[] = [];

  constructor() {
    const savedContacts = localStorage.getItem('contacts');
    this.contacts = savedContacts ? JSON.parse(savedContacts) : [];

    const savedVotes = localStorage.getItem('votes');
    this.votes = savedVotes ? JSON.parse(savedVotes) : [];
  }

  saveContact(contact: any): void {
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts(): any[] {
    return this.contacts;
  }

  saveVote(vote: any): void {
    this.votes.push(vote);
    localStorage.setItem('votes', JSON.stringify(this.votes));
  }

  getVotes(): any[] {
    return this.votes;
  }
}
