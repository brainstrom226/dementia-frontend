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
    console.log('contatcs data sent', newContacts);
    return this.http.post(url,newContacts);
  }
}
