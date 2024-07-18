import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {path: '', redirectTo:'contacts', pathMatch:'full'},
  {path:'landingPage', component: LandingPageComponent},
  {path: '**', component: PageNotFoundComponent},
  {path:'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
