import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    StatisticsComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    SharedModule
  ]
})
export class StatisticsModule {
}
