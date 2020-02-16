import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { NgModule } from '@angular/core';
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
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyBMtiqBynHcurfSncZ5CSolDkNao5508KA',
      authDomain: 'table-soccer-d5bed.firebaseapp.com',
      databaseURL: 'https://table-soccer-d5bed.firebaseio.com',
      projectId: 'table-soccer-d5bed',
      storageBucket: 'table-soccer-d5bed.appspot.com',
      messagingSenderId: '273036208473',
      appId: '1:273036208473:web:35ec8cb1ca387fb7f40448'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
