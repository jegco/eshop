import { Component, OnInit, Input, Output } from '@angular/core';
import { IStack, Stack } from '../model/Stack';
import { Router } from '../../../node_modules/@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input()
  stack: IStack;
  quantity: number;
  paycardStack: IStack;


  constructor(private router: Router,
  private productService: ProductService) {}

  details(id: String) {
    this.router.navigateByUrl('/details/' + id);
  }

  addToPayCar() {
    this.stack.quantity -= this.quantity;
    this.productService.updateStack(this.stack).subscribe(() => {
      this.paycardStack = Object.create(this.stack);
      this.paycardStack.quantity = this.quantity;
      this.paycardStack.id = this.stack.id;
      this.paycardStack.product = this.stack.product;
      console.log(this.paycardStack);
      this.productService.addToCar(this.paycardStack).subscribe((response: Response) => console.log(response.json()));
    });
  }
}
