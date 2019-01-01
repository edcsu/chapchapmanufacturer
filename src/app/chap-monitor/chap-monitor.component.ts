import { Component, OnInit } from '@angular/core';

const N = 100000;
const arr = N.toString().split('').map(Number);
console.log(arr);

@Component({
  selector: 'app-chap-monitor',
  templateUrl: './chap-monitor.component.html',
  styleUrls: ['./chap-monitor.component.scss']
})
export class ChapMonitorComponent implements OnInit {

  ChapTrans = arr;
  ChapOnline = 1044;
  constructor() { }

  ngOnInit() {

  }

}
