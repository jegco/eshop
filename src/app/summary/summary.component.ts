import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IStack, Stack } from '../model/Stack';
import { Router } from '../../../node_modules/@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  quantity: number;
  paycardStack: IStack;

  @Input()
  stack: IStack;

  @Output()
  counterEntry: EventEmitter<number> = new EventEmitter();

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
      this.productService.addToCar(this.paycardStack).subscribe(() =>
        this.counterEntry.emit(1)
      );
    });
  }
}
