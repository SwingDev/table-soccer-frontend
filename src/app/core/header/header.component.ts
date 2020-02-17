import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private router: Router, private readonly userService: UserService) {
  }

  ngOnInit() {
    this.userService.user().subscribe({
      next: (user: User) => {
        this.user = user;
        if (user) {
          this.router.navigateByUrl('/');
        } else {
          this.router.navigateByUrl('/login');
        }
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

}
