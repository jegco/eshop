import { Injectable } from '@angular/core';
import { IStack } from './model/Stack';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  stacks: IStack[];

  constructor(private http: Http) { }

  getData(): Observable<any> {
    return this.http
      .get('https://eshop-752ae.firebaseio.com/stock.json');
  }

  updateStack(stack: IStack) {
    const data = JSON.stringify(stack);
    return this.http.put('https://eshop-752ae.firebaseio.com/stock/' +
      stack.id + '.json', data).map((response) => response.json());
  }

  addToCar(stack: IStack) {
    const data = JSON.stringify(stack);
    return this.http.put('https://eshop-752ae.firebaseio.com/paycar/' +
    stack.id + '.json', data).map((response) => response.json());
  }

  getProduct(id: number): Observable<any> {
    return this.http
      .get('https://eshop-752ae.firebaseio.com/stock/' + id + '.json');
  }

  getPaycar(): Observable<any> {
    return this.http
      .get('https://eshop-752ae.firebaseio.com/paycar/.json');
  }

  pay() {
    return this.http.delete('https://eshop-752ae.firebaseio.com/paycar/.json').map(
      (response) => response.json()
    );
  }
}
