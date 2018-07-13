import { Component, OnInit } from '@angular/core';
import { IStack } from '../model/Stack';
import { Route, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';

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
    console.log(name);
    this.stacks = this.stacks.filter(stack => stack.product.name.indexOf(name) >= 0);
  }
}
