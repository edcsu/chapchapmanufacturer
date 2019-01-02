import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-chap-edit-product',
  templateUrl: './chap-edit-product.component.html',
  styleUrls: ['./chap-edit-product.component.scss']
})
export class ChapEditProductComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }
  /*
  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/products');
  }
  */

  ngOnInit() {
  }

}
