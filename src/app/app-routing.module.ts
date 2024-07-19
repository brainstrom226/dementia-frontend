import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ScheduleComponent } from './pages/schedule/schedule.component'
import { GalleryComponent } from './pages/gallery/gallery.component'


const routes: Routes = [
  {path: '', redirectTo:'sign-up', pathMatch:'full'},
  {path:'sign-up', component: SignUpComponent},
  {path:'care-companion', component: LandingPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
