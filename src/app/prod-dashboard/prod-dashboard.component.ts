import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-prod-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'monetization_on', cvalue: 'UGX335BN'
          },
          {
            title: 'Total Orders', cols: 1, rows: 1, card_icon: 'group', cvalue: '2K '
          },
          {
            title: 'Growth', cols: 1, rows: 1, card_icon: 'trending_up', cvalue: '+2.0%'
          }
        ];
      }

      return [
        {
          title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'business_center', cvalue: 'UGX335BN'
        },
        {
          title: 'Total Orders', cols: 1, rows: 1, card_icon: 'description', cvalue: '2000 '
        },
        {
          title: 'Growth', cols: 1, rows: 1, card_icon: 'trending_up', cvalue: '+2.0%'
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
