import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit() {
    this.userService.me().subscribe({
      next: (user: User) => {
        this.user = user;
        if (user) {
          this.router.navigateByUrl('/scoreboard');
        } else {
          this.router.navigateByUrl('/');
        }
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

  public onLogoutClick() {
    this.authService.logout();
  }

}
