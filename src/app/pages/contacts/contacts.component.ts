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
  uid= '';
  showDetails = false;
  constructor(private route: ActivatedRoute, private router: Router, private contactsService:ContactsService) {
  
   }

   contacts: Contacts[] = [];
   contact = {
    name: '',
    numbers: []
   };

   ngOnInit(): void {
    this.uid = localStorage.getItem('user') || '';
    console.log('fetch contacts details..');
    this.contactsService.getContacts(this.uid).subscribe(data => {
      this.contacts = data;
    });
   }

  submitForm() {
    console.log('contacts saved..');
  this.contacts = [this.contact];
    this.contactsService.addContacts(this.contacts, this.uid).subscribe((res) => {
      console.log(res);
      this.contacts = res;
    })
    this.contact.name = '';
    this.contact.numbers = [];
  }

  update(idx: any) {
    console.log('contacts updated..');
    this.contactsService.updateContacts(this.contacts, this.uid, this.contacts[idx].id).subscribe((res) => {
      console.log(res);
    })
  }

  delete(idx: any) {
    console.log('contacts deleted..');
    this.contactsService.deleteContacts(this.uid, this.contacts[idx].id).subscribe((res) => {
      console.log(res);
      this.contacts.splice(idx,1);
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
