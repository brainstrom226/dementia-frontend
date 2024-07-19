import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';
import { Contacts } from '../../models/Contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  newContacts = {
    id:'',
    name: '',
    priPhNum: '',
    secPhNum: ''
  };
  userId = '1234';
  showDetails = false;
  constructor(private route: ActivatedRoute, private router: Router, private contactsService:ContactsService) {
  
   }

   contacts: Contacts[] = [
    new Contacts('John Doe', 1234567890, 9876543210),
    new Contacts('Jane Smith', 1122334455, 5566778899)
  ];

   ngOnInit(): void {
    console.log('fetch contacts details..');
    this.contactsService.getContacts(this.userId).subscribe(data => {
      this.newContacts = data;
    });
   }

  submitForm() {
    console.log('contacts saved..');
    this.contactsService.addContacts(this.newContacts).subscribe((res) => {
      console.log(res);
    })
  }

  update() {
    console.log('contacts updated..');
    this.contactsService.updateContacts(this.newContacts).subscribe((res) => {
      console.log(res);
    })
  }

  delete() {
    console.log('contacts deleted..');
    this.contactsService.deleteContacts(this.newContacts).subscribe((res) => {
      console.log(res);
    })
  }

  getContacts() {
    console.log('fetch contact details..');

  }

  onAddClick() {
    this.showDetails = true;
  }

  onCancel(){
    this.showDetails = false;
  }
}
