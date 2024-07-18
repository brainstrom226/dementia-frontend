import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


const routes: Routes = [
  {path: '', redirectTo:'signUp', pathMatch:'full'},
  {path:'signUp', component: SignUpComponent},
  {path:'landingPage', component: LandingPageComponent},
  // {path:'contacts', component: ContactsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
