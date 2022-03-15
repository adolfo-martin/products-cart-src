export type ProductUuid = string;

export class Product {
    constructor(
        public readonly uuid: ProductUuid,
        public readonly name: string,
        public readonly price: number,
    ) { }
}
