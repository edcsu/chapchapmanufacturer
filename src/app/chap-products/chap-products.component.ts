import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Section {
  name: string;
  status: string;
  card_icon: string;
  card_color: string;
}

@Component({
  selector: 'app-chap-products',
  templateUrl: './chap-products.component.html',
  styleUrls: ['./chap-products.component.scss']
})
export class ChapProductsComponent implements OnInit {

  details: Section[] = [
    {
      name: 'Last 24 Hours',
      status: '290 new retailers',
      card_icon: 'person_add',
      card_color: 'primary'
    },
    {
      name: 'Awaiting Process',
      status: '234 orders',
      card_icon: 'sync',
      card_color: 'primary'
    },
    {
      name: 'On hold',
      status: '120 orders',
      card_icon: 'timer',
      card_color: 'accent'
    },
    {
      name: 'Low in Stock',
      status: '490 orders',
      card_icon: 'error',
      card_color: 'primary'
    },
    {
      name: 'Out of Stock',
      status: '42 items',
      card_icon: 'cancel',
      card_color: 'warn'
    }
  ];

  constructor(
                private repository: ProductRepository,
                private breakpointObserver: BreakpointObserver
              ) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  /*
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
  */
  ngOnInit() {
  }

}
