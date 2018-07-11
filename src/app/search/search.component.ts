import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productName: String = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  search() {

  }

}