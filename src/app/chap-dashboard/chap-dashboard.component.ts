import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-chap-dashboard',
  templateUrl: './chap-dashboard.component.html',
  styleUrls: ['./chap-dashboard.component.scss']
})
export class ChapDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'business_center', cvalue: '335BN', cunit: 'UGX',
            trend_icon: 'trending_up', trend: '80.0%', trend_color: 'primary'
          },
          {
            title: 'Total Merchants', cols: 1, rows: 1, card_icon: 'group', cvalue: '2K', cunit: 'PEOPLE',
            trend_icon: 'trending_down', trend: '13.4%', trend_color: 'warn'
          },
          {
            title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
            trend_icon: 'trending_down', trend: '26.4%', trend_color: 'warn'
          },
          {
            title: 'AOV (Average Order Value)', cols: 1, rows: 1, card_icon: 'local_atm', cvalue: '15MN', cunit: 'UGX',
            trend_icon: 'trending_up', trend: '86.5%', trend_color: 'accent'
          }
        ];
      }

      return [
        {
          title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'monetization_on', cvalue: '335BN', cunit: 'UGX',
          trend_icon: 'trending_up', trend: '80.5%', trend_color: 'primary'
        },
        {
          title: 'Total Merchants', cols: 1, rows: 1, card_icon: 'group', cvalue: '2K', cunit: 'PEOPLE',
          trend_icon: 'trending_down', trend: '13.4%', trend_color: 'warn'
        },
        {
          title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
          trend_icon: 'trending_down', trend: '26.4%', trend_color: 'warn'
        },
        {
          title: 'Average Order Value', cols: 1, rows: 1, card_icon: 'local_atm', cvalue: '15MN', cunit: 'UGX',
          trend_icon: 'trending_up', trend: '86.5%', trend_color: 'accent'
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
