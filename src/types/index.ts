export interface IProducts {
    id: number;
    name: string;
    price: number;
}

export interface ICartItem extends IProducts {
    quantity: number;
}