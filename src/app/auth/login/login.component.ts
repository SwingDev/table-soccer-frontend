import { AuthProvider } from 'ngx-auth-firebaseui';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;

  constructor() { }

  ngOnInit() {
  }

}
