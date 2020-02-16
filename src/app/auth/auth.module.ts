import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NgxAuthFirebaseUIModule,
  ]
})
export class AuthModule { }
