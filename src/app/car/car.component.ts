import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IStack } from '../model/Stack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  paycard: IStack[];
  subtotal = 0;

  constructor(private productService: ProductService,
  private router: Router) {
    this.productService.getPaycar().subscribe(paycard => {
      this.paycard = paycard.json();
      this.paycard = this.paycard.filter(stock => stock != null);
      this.paycard.forEach(stock => {
        this.subtotal += stock.quantity * stock.product.price;
      });
    });
  }

  pay() {
    this.productService.pay().subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }
}
