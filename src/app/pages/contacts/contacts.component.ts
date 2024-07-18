import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  newContacts = {
    name: '',
    priPhNum: '',
    secPhNum: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private contactsService:ContactsService) {
  
   }

  submitForm() {
    console.log('contacts saved..');
    this.contactsService.addContacts(this.newContacts).subscribe((res) => {
      console.log(res);
    })
  }
}
