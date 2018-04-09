import { Injectable } from '@angular/core';
import { IStack } from './model/Stack';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  stacks: IStack[];

  constructor(private http: Http) {}

    getData(): Observable<any> {
      console.log('llego');
      return this.http
        .get('../assets/data/products-api.json');
      // console.log(this.stacks);
    }
}
