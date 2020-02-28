import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundPipe } from './round.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserBarComponent } from './user-bar/user-bar.component';

@NgModule({
  declarations: [
    RoundPipe,
    UserBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RoundPipe,
    FontAwesomeModule,
    UserBarComponent
  ],
})
export class SharedModule {
}
