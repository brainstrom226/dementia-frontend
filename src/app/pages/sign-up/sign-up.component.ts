import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user = {
    name: '',
    email: '',
  };

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  submitForm() {
    this.authService.signUp(this.user).subscribe(res=> {
      console.log(res);
    });
    this.router.navigate(['landingPage']);
  }
}
