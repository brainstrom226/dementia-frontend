import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }


  addContacts(newContacts: any): Observable<any> {
    const url = 'https://jsonplaceholder.org/posts';
    console.log('add contact data sent', newContacts);
    return this.http.post(url,newContacts);
  }

  updateContacts(newContacts: any): Observable<any> {
    const url = 'https://jsonplaceholder.org/posts/1';
    console.log('updated contact data sent', newContacts);
    return this.http.put(url,newContacts);
  }

  deleteContacts(newContacts: any): Observable<any> {
    const url = 'https://jsonplaceholder.org/posts/1';
    // const url = '/your-endpoint/${id}';
    console.log('delete contact for id ', newContacts);
    return this.http.delete(url, newContacts);
  }

  getContacts(userId: any): Observable<any> {
    const url = 'https://jsonplaceholder.org/posts/1';
     // const url = '/your-endpoint/${userId}';
    return this.http.get(url);
  }
}
