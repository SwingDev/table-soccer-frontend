import { AuthProvider } from 'ngx-auth-firebaseui';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  providers = AuthProvider;
  title = 'table-soccer-frontend';
}
