import { Component, OnInit } from '@angular/core';

interface Contact{
  name: string;
  phoneNumber:string
  relationship:string
}

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{

contacts: Contact[] = [{name : 'John Doe',phoneNumber:'123-456-7890',relationship:'Spouse'}];
newContact:Contact = {
  name: '',
  phoneNumber:'',
  relationship:''
};
constructor(){}
ngOnInit():void{

}
addContact(){
  console.log("Hello");
}
}
