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
      return this.http
        .get('https://eshop-752ae.firebaseio.com/stock.json');
    }

    updateStack(stack: IStack) {
      const data = JSON.stringify(stack);
      this.http.put('https://eshop-752ae.firebaseio.com/stock.json', stack);
    }

    getProduct(id: number): Observable<any> {
      return this.http
        .get('https://eshop-752ae.firebaseio.com/stock/' + id + '.json');
    }
}
