import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-chap-checkout',
  templateUrl: './chap-checkout.component.html',
  styleUrls: ['./chap-checkout.component.scss']
})
export class ChapCheckoutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(
                public repository: OrderRepository,
                public order: Order
              ) { }

  ngOnInit() {
  }

  submitOrder(form: NgForm) {
                                this.submitted = true;
                                this.submitted = true;
                                if (form.valid) {
                                  this.repository.saveOrder(this.order).subscribe(order => {
                                    this.order.clear();
                                    this.orderSent = true;
                                    this.submitted = false;
                                  });
                                }
                              }
}
