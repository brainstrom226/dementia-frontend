import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent {
  showTiles = false;
  
  showViews: { [key in ViewType]: boolean } = { 
    schedule: false, 
    gallery: false, 
    games: false, 
    contacts: false 
  };
  constructor(private route: ActivatedRoute, private router: Router){
  }

  goToHome(): void {
    this.router.navigate(['landingPage']);
  }

  openView(view: ViewType): void {
    this.showTiles = true;
    this.showViews[view] = true;
  }
}

type ViewType = 'schedule' | 'gallery' | 'games' | 'contacts';
