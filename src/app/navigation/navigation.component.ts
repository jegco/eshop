import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnChanges {

  @Input()
  contador: Number;

  carNotEmpty = false;

  constructor() { }

  ngOnChanges(): void {
    if (this.contador !== 0) {
      this.carNotEmpty = true;
    } else {
      this.carNotEmpty = false;
    }
  }

}
