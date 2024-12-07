export class Product {
  constructor(
    public sku: string,
    public name: string,
    public desription: string,
    public unitPrice: string,
    public imageUrl: string,
    public active: boolean,
    public unitsInStock: string,
    public dateCreated: Date,
    public lastUpdated: Date
  ) {}
}
