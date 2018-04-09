import { IProduct } from './Product';

export interface IStack {
	product: IProduct;
	quantity: number;
}

export class Stack implements IStack {

	constructor(public product: IProduct,
		public quantity: number) { }
}
