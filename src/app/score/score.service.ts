import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreboardEntry } from './scoreboard-entry';
import { Score } from './score';
import { environment } from '../../environments/environment';
import { Match } from './match';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private readonly http: HttpClient, private readonly userService: UserService) {}

  public scoreboard(): Observable<ScoreboardEntry[]> {
    return this.http.get<ScoreboardEntry[]>(`${environment.apiUrl}/scoreboard`);
  }

  public scoreHistory(): Observable<Score[]> {
    return this.http.get<Score[]>(`${environment.apiUrl}/score/history`);
  }

  public sendScore(score: Score) {
    return this.http.post(`${environment.apiUrl}/score`, score);
  }

  public matchHistory(): Observable<Match[]> {
    return this.scoreHistory().pipe(
      switchMap((scores: Score[]) => {
        return this.userService.users().pipe(
          map((users: User[]) => {
            return scores.map((score: Score) => {
              return {
                winner: users.find((u: User) => u.firebaseId == score.winner),
                loser: users.find((u: User) => u.firebaseId == score.loser),
                loserScore: score.loserScore,
                timestamp: score.timestamp
              };
            });
          })
        );
      })
    );
  }
}
