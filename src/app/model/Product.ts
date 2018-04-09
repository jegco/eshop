export interface IProduct {
	name: String;
	imageUrl: String;
	price: number;
	id: String;
}

export class Product implements IProduct {

	constructor(public name: String,
		public imageUrl: String,
		public price: number,
		public id: String) { }
}
