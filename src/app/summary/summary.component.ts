import { Component, OnInit, Input, Output } from '@angular/core';
import { IStack, Stack } from '../model/Stack';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input()
  stack: IStack;


  constructor(private router: Router) {}

  details(id: String) {
    this.router.navigateByUrl('/details/' + id);
  }
}
