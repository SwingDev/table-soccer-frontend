import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule
  ]
})
export class DashboardModule { }
