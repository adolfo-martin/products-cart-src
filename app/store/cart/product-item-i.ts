export type ProductUuid = string;

export interface ProductItemI {
    readonly uuid: ProductUuid;
    readonly name: string;
    readonly price: number;
}