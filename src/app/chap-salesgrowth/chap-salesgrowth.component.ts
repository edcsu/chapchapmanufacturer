declare var require: any;

import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

const HC_exporting = require('highcharts/modules/exporting');
const HC_sl = require('highcharts/modules/series-label');
const HC_drill = require('highcharts/modules/drilldown');
const HC_exportdata = require('highcharts/modules/export-data');

HC_exporting(Highcharts);
HC_sl(Highcharts);
HC_drill(Highcharts);
HC_exportdata(Highcharts);
@Component({
  selector: 'app-chap-salesgrowth',
  templateUrl: './chap-salesgrowth.component.html',
  styleUrls: ['./chap-salesgrowth.component.scss']
})
export class ChapSalesgrowthComponent implements OnInit {

  Distributor = Highcharts;
  distOptions = {
    title: {
      text: 'Product Sales Growth by regions, 2010-2016',
      style: {
                color: '#F73233'
             }
    },

    subtitle: {
      text: 'Source: the Unilever Distributors chart'
    },

    yAxis: {
      title: {
        text: 'Distributors over different products'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [{
      name: 'Omo',
      data: [439, 525, 571, 696, 970, 1199, 1371, 1541]
    }, {
      name: 'Blue Band',
      data: [249, 240, 297, 298, 324, 302, 381, 404]
    }, {
      name: 'Dove',
      data: [117, 177, 160, 197, 201, 243, 321, 393]
    }, {
      name: 'Vaseline',
      data: [null, null, 79, 121, 151, 224, 344, 342]
    }, {
      name: 'Other',
      data: [129, 59, 81, 112, 89, 118, 182, 181]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  };

  constructor() { }

  ngOnInit() {
  }

}
