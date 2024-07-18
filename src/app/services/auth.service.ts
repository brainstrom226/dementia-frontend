import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    const url = 'http://localhost:8080/dementia-app/user/sign-up';
    console.log('data sent', user);
    return this.http.post(url, user);
  }
}
