import { Component, OnInit } from '@angular/core';
import { IStack } from '../model/Stack';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  stacks: IStack[];
  productsLoaded = false;
  contador = 2;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getData().subscribe(stacks => {
      this.stacks = stacks.json();
      this.productsLoaded = true;
    });
  }

  search(name: string) {
    this.productService.getData().subscribe(stacks => {
      this.stacks = stacks.json();
      this.stacks = this.stacks.filter(stack => stack.product.name.search(name) !== -1);
    });
  }
}
