import { Component, OnInit } from '@angular/core';
import { IStack } from '../model/Stack';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  stack: IStack;

  constructor() { }

  ngOnInit() {
  }

}
