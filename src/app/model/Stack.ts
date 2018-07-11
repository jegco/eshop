import { IProduct } from './Product';

export interface IStack {
	product: IProduct;
	quantity: number;
	id: number;
}

export class Stack implements IStack {

	constructor(public product: IProduct,
		public quantity: number,
	public id: number) { }
}
