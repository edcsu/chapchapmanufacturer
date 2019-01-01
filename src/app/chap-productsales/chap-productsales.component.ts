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
  selector: 'app-chap-productsales',
  templateUrl: './chap-productsales.component.html',
  styleUrls: ['./chap-productsales.component.scss']
})
export class ChapProductsalesComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Product Sales by category'
    },
    xAxis: {
      type: 'category'
    },

    legend: {
      enabled: false
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        }
      }
    },

    series: [{
      name: 'Products',
      colorByPoint: true,
      data: [{
        name: 'Homecare',
        y: 6,
        drilldown: 'homecare'
      }, {
        name: 'Personal',
        y: 10,
        drilldown: 'personal'
      }, {
        name: 'Food',
        y: 6,
        drilldown: 'food'
      }]
    }],
    drilldown: {
      series: [{
        id: 'homecare',
        name: 'Homecare',
        data: [
          {
            name: 'Sunlight',
            y: 45,
            drilldown: 'sunlight'
          }, {
            name: 'Omo',
            y: 45,
            drilldown: 'omo'
          }, {
            name: 'vim',
            y: 45,
            drilldown: 'vim'
          }, {
            name: 'Clear',
            y: 45,
            drilldown: 'clear'
          }, {
            name: 'Comfort',
            y: 45,
            drilldown: 'comfort'
          }, {
            name: 'Domex',
            y: 45,
            drilldown: 'domex'
          }, {
            name: 'Rin',
            y: 45,
            drilldown: 'rin'
          }
        ]
      }, {
        id: 'sunlight',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'sunNorth',
        data: [
          ['North East', 30],
          ['North Central', 25],
          ['West Nile', 19],
        ]
      }, {
        id: 'sunEast',
        data: [
          ['East', 30],
          ['Central', 25],
          ['West', 19],
        ]
      }, {
        id: 'sunWest',
        data: [
          ['South', 30],
          ['North', 25],
          ['Central', 19],
        ]
      }, {
        id: 'sunCentral',
        data: [
          ['North', 30],
          ['Central', 25],
          ['South', 19],
        ]
      }, {
        id: 'omo',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'vim',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'clear',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'comfort',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'domex',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'rin',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'personal',
        data: [
          {
            name: 'Axe',
            y: 74,
            drilldown: 'axe'
          }, {
            name: 'Close Up',
            y: 62,
            drilldown: 'closeUp'
          }, {
            name: 'Dove',
            y: 51,
            drilldown: 'dove'
          }, {
            name: 'Fair & Lovely',
            y: 48,
            drilldown: 'fair'
          }, {
            name: 'Lifebouy',
            y: 42,
            drilldown: 'lifebouy'
          }, {
            name: 'Lux',
            y: 40,
            drilldown: 'lux'
          }, {
            name: 'Rexona',
            y: 39,
            drilldown: 'rexona'
          }, {
            name: 'Sure',
            y: 35,
            drilldown: 'sure'
          }, {
            name: 'Vaseline',
            y: 31,
            drilldown: 'vaseline'
          }
        ]
      }, {
        id: 'axe',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'closeUp',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'dove',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'fair',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'lifebouy',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'lux',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'rexona',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'sure',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'vaseline',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'food',
        data: [
          {
            name: 'Lipton tea',
            y: 65,
            drilldown: 'lipton'
          }, {
            name: 'Knorr',
            y: 57,
            drilldown: 'knorr'
          }, {
            name: 'Kissan',
            y: 43,
            drilldown: 'kissan'
          }, {
            name: 'Blueband',
            y: 38,
            drilldown: 'blueband'
          }, {
            name: 'Bru coffee',
            y: 24,
            drilldown: 'brucoffee'
          }, {
            name: 'PiKwalitu Walls',
            y: 16,
            drilldown: 'pikwa'
          }]
      }, {
        id: 'lipton',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'knorr',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'kissan',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'blueband',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'brucoffee',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }, {
        id: 'pikwa',
        data: [
          {
            name: 'North',
            y: 74,
            drilldown: 'sunNorth'
          }, {
            name: 'East',
            y: 62,
            drilldown: 'sunEast'
          }, {
            name: 'Central',
            y: 51,
            drilldown: 'sunCentral'
          }, {
            name: 'West',
            y: 44,
            drilldown: 'sunWest'
          }
        ]
      }
      ],
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
