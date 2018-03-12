import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'library/:id', component: BookComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', redirectTo: 'library', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
