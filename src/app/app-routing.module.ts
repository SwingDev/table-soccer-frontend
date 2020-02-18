import { LoggedInGuard } from 'ngx-auth-firebaseui';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMatchComponent } from './score/add-match/add-match.component';
import { MatchHistoryComponent } from './score/match-history/match-history.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'scoreboard',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'add-match',
    pathMatch: 'full',
    component: AddMatchComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'match-history',
    pathMatch: 'full',
    component: MatchHistoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
