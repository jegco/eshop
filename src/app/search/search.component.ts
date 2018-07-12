import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output()
  searchEmiter: EventEmitter<String> = new EventEmitter();

  constructor() { }

  search(productName: string) {
    console.log('llego');
    this.searchEmiter.emit(productName);
  }
}
