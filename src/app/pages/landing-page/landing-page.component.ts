import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private route: ActivatedRoute, private router: Router){
  }

  goToHome(): void {
    this.router.navigate(['landingPage']);
  }

  goToAbout(): void {
    console.log('hello');
  }
}
