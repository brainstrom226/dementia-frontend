import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactsComponent } from './contacts/contacts.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LandingPageComponent,
    PageNotFoundComponent,
    ContactsComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    LandingPageComponent,
    PageNotFoundComponent,
    ContactsComponent
  ]
})
export class PagesModule { }
