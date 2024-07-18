import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  submitForm() {
    console.log('Form submitted!', this.user);
    this.authService.signUp(this.user).subscribe(res=> {
      console.log(res);
    });
  }
}
