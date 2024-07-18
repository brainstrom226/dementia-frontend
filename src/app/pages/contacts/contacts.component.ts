import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  newContacts = {
    name: '',
    email: '',
    phoneNumber: ''
  };

  private router: Router;
  constructor(private route: ActivatedRoute, private routes: Router) {
    this.router = routes;
   }

  submitForm() {
    console.log('contacts saved..');
  }
}
