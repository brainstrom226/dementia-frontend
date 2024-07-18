import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user = {
    uid: '',
    email: '',
    password: '',
    role: '',
  };
  signUpSubscription: Subscription | undefined;


  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  submitForm() {
    console.log(this.user.role);
    this.signUpSubscription = this.authService.signUp(this.user).subscribe(
      res => {
        console.log('Signup successful', res);
        localStorage.setItem('user', this.user.uid);
        this.router.navigate(['landingPage']);
      },
      err => {
        console.error('Signup failed', err);
        if (err.status === 400) {
          alert('Invalid signup details. Please try again.');
        } else if (err.status === 500) {
          alert('An error occurred on the server. Please try again later.');
        } else {
          alert('Signup failed. Please try again.');
        }
    });
  }

  ngOnDestroy() {
    if(this.signUpSubscription){
      this.signUpSubscription.unsubscribe();
    }
  }
}
