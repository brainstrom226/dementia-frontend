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


  tiles = [
    { heading: 'schedule', image: 'assets/schedule.jpg' },
    { heading: 'gallery', image: 'assets/gallery.jpg' },
    { heading: 'games', image: 'assets/games.jpg' },
    { heading: 'contacts', image: 'assets/contact.jpg' }
  ];

  constructor(private route: ActivatedRoute, private router: Router){
  }

  goToHome(): void {
    this.router.navigate(['care-companion']);
    this.showTiles = true;
    this.showViews.contacts = false;
    this.showViews.games = false;
    this.showViews.gallery = false;
    this.showViews.schedule = false;
  }

  signOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['sign-up']);
  }

  openView(view: any): void {
    this.showTiles = true;
    this.openOneView(view);
  }

  openOneView(view: any): void {
    Object.keys(this.showViews).forEach((key) =>{
      const viewType = key as ViewType;
      if(key != view){
        this.showViews[viewType] = false;
      }else {
        this.showViews[viewType] = true;
      }
    });
  }
}

type ViewType = 'schedule' | 'gallery' | 'games' | 'contacts';
