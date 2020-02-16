import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyBMtiqBynHcurfSncZ5CSolDkNao5508KA',
      authDomain: 'table-soccer-d5bed.firebaseapp.com',
      databaseURL: 'https://table-soccer-d5bed.firebaseio.com',
      projectId: 'table-soccer-d5bed',
      storageBucket: 'table-soccer-d5bed.appspot.com',
      messagingSenderId: '273036208473',
      appId: '1:273036208473:web:35ec8cb1ca387fb7f40448'
    },
    () => 'table-soccer-frontend',
    {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
      authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
      authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
      passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
      passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
      // Same as password but for the name
      nameMaxLength: 50,
      nameMinLength: 2,
      // If set, sign-in/up form is not available until email has been verified.
      // Plus protected routes are still protected even though user is connected.
      guardProtectedRoutesUntilEmailIsVerified: true,
      enableEmailVerification: false, // default: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
