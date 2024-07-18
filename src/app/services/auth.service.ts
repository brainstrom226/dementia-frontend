import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    console.log('data sent', user);
    return this.http.get(url);
  }
}
