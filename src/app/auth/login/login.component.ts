import { AuthProvider } from 'ngx-auth-firebaseui';

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(
      async (user) => {
        if (user) {
          const token = await user.getIdToken();

          this.router.navigateByUrl('/');

          console.log(user, token);
        } else {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

}
