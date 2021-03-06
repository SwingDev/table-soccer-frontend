import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { ScoreModule } from '../score/score.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule,
    ScoreModule,
  ]
})
export class DashboardModule { }
