import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { AddMatchComponent } from './add-match/add-match.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ScoreboardComponent, AddMatchComponent, MatchHistoryComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ScoreboardComponent
  ]
})
export class ScoreModule {
}
