import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-chap-order',
  templateUrl: './chap-order.component.html',
  styleUrls: ['./chap-order.component.scss']
})
export class ChapOrderComponent implements OnInit {

  public selectedCategory = null;

  constructor( private repository: ProductRepository,
               public cart: Cart,
               private router: Router
              ) { }

  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cartdetail');
  }

  ngOnInit() {
  }

}
