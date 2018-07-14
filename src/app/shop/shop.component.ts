import { Component, OnInit } from '@angular/core';
import { IStack, Stack } from '../model/Stack';
import { Route, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import { STATUS_CODES } from 'http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  stacks: IStack[];
  productsLoaded = false;

  constructor(private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getData().subscribe(stacks => {
      this.stacks = stacks.json();
      this.productsLoaded = true;
    });
  }

  search(name: string) {
    const indexes: number[] = [];
    this.productService.getData().subscribe(stacks => {
      this.stacks = stacks.json();
      this.stacks = this.stacks.filter(stack => stack.product.name.search(name) !== -1);
    });
  }
}
