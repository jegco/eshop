import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  productName: String = '';

  @Output()
  searchEmiter: EventEmitter<String> = new EventEmitter();

  constructor() { }

  search() {
    this.searchEmiter.emit(this.productName);
  }
}
