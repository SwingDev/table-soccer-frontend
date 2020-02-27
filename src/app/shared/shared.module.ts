import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundPipe } from './round.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RoundPipe],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RoundPipe,
    FontAwesomeModule
  ],
})
export class SharedModule {
}
