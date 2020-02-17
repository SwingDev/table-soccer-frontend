import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreboardEntry } from './scoreboard-entry';
import { Score } from './score';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private readonly http: HttpClient) {}

  public scoreboard(): Observable<ScoreboardEntry[]> {
    return this.http.get<ScoreboardEntry[]>(`${environment.apiUrl}/scoreboard`);
  }

  public scoreHistory(): Observable<Score[]> {
    return this.http.get<Score[]>(`${environment.apiUrl}/score/history`);
  }

  public sendScore(score: Score) {
    return this.http.post(`${environment.apiUrl}/scoreboard`, score);
  }
}
