import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { ScoreService } from '../score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent implements OnInit {

  loserScore = '0';
  me: User;
  loser: User;
  validationMessage: string = null;
  losersToPick: User[] = [];

  constructor(
    private readonly userService: UserService,
    private readonly scoreService: ScoreService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {
    this.userService.me().subscribe((me: User) => {
      this.me = me;

      this.userService.users().subscribe((users: User[]) => {
        users.forEach((user: User) => {
          if (user.firebaseId !== me.firebaseId) {
            this.losersToPick.push(user);
          }
        });
      });
    });
  }

  onSubmitClick() {
    const score: number = parseInt(this.loserScore, 10);
    if (score > 9 || score < 0) {
      this.validationMessage = 'Invalid score!';
    } else {
      this.scoreService.sendScore({
        winner: this.me.firebaseId,
        loser: this.loser.firebaseId,
        loserScore: score,
        timestamp: Date.now()
      }).subscribe(() => {
        this.router.navigateByUrl('/match-history');
      });
    }
  }

  pickLoser(loserToPick) {
    this.loser = loserToPick;
  }

  onKeyUp() {
    this.validationMessage = null;
  }
}


