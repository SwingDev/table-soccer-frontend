import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { Match } from '../match';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {

  matches: Match[] = [];

  constructor(private readonly scoreService: ScoreService) {
  }

  ngOnInit() {
    this.scoreService.matchHistory().subscribe((matches: Match[]) => {
      this.matches = matches;
    });
  }

}
