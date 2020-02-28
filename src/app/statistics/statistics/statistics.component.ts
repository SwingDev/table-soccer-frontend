import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../score/score.service';
import { ScoreboardEntry } from '../../score/scoreboard-entry';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  scoreboardEntries: ScoreboardEntry[] = [];

  constructor(private readonly scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.scoreboard().subscribe({
      next: (scoreboardEntries: ScoreboardEntry[]) => {
        this.scoreboardEntries = scoreboardEntries;
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

}
