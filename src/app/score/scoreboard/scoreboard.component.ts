import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { ScoreboardEntry } from '../scoreboard-entry';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  scoreboardEntries: ScoreboardEntry[] = [];

  constructor(private readonly scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.scoreboard().subscribe({
      next: (scoreboardEntries: ScoreboardEntry[]) => {
        // this.scoreboardEntries = scoreboardEntries;
      },
      error: () => {}
    });
  }

}
