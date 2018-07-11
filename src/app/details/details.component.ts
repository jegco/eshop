import { Component, OnInit } from '@angular/core';
import { IStack } from '../model/Stack';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  stack: IStack;
  id: number;
  productsLoaded = false;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(stack => {
      this.stack = stack.json();
      this.productsLoaded = true;
    });
  }

}
