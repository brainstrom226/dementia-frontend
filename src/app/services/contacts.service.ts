import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseURL = 'http://localhost:8080/dementia-app';

  constructor(private http: HttpClient) { }


  addContacts(newContacts: any, userId: string): Observable<any> {
    const url = `${this.baseURL}/user/emergency-contact/${userId}`;
    // console.log('add contact data sent', newContacts);
    return this.http.post(url,newContacts);
  }

  updateContacts(newContacts: any, userId: string, contactId: any): Observable<any> {
    const url = `${this.baseURL}/user/emergency-contact/${userId}/${contactId}`;
    console.log('updated contact data sent', newContacts);
    return this.http.put(url,newContacts);
  }

  deleteContacts(userId: any, contactId: any): Observable<any> {
    const url = `${this.baseURL}/user/emergency-contact/${userId}/${contactId}`;
    console.log('delete contact for id ', userId);
    return this.http.delete(url);
  }

  getContacts(userId: any): Observable<any> {
    const url = `${this.baseURL}/user/emergency-contact/${userId}`;
    return this.http.get(url);
  }
}
