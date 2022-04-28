import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})

export class GraphiqueComponent implements OnInit {
  // @ts-ignore
  numeroutilise :number = 250
  numerodisponible :number = 50
  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: true,
      type: 'pie',
      },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      data: [{
        name: 'Utilisé',
        y: this.numeroutilise,
      }, {
        name: 'Disponible',
        y: this.numerodisponible,
      }]
    }]
  }
  constructor() { }

  ngOnInit() {
    Highcharts.chart('graphique', this.options);

  }
}
