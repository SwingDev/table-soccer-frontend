import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { ScoreboardEntry } from '../../score/scoreboard-entry';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() scoreboardEntries: ScoreboardEntry[] = [];

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [],
    },
  };
  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [pluginAnnotations];

  dataReady = false;

  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  constructor() {
  }

  ngOnInit() {
    this.buildChart();
  }

  ngOnChanges() {
    this.buildChart();
  }

  chartClicked({ event, active }: { event?: MouseEvent, active?: {}[] }) {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }) {
    console.log(event, active);
  }

  private buildChart() {
    if (!this.scoreboardEntries || this.scoreboardEntries.length === 0) {
      return;
    }

    this.lineChartLabels = [];
    this.lineChartData = [];
    for (const scoreboardEntry of this.scoreboardEntries) {
      const data = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.scoreboardEntries.length; i++) {
        data.push(scoreboardEntry.score);
      }
      this.lineChartData.push({
        data,
        label: scoreboardEntry.name
      });
      this.lineChartLabels.push(scoreboardEntry.name);
    }
    this.dataReady = true;
    setTimeout(() => {
      if (this.chart) {
        this.chart.update();
      }
    }, 1000);
  }
}
