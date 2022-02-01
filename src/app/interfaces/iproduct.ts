export interface iproduct {
    id: number,
    title: string,
    farm: string,
    freshness: string,
    stars: number,
    price: number,
    currency: string,
    discount: number,
    wishlist: boolean,
    description: string
}

export interface basketProduct {
    id: number,
    title: string,
    farm: string,
    freshness: string,
    stars: number,
    price: number,
    currency: string,
    discount: number,
    wishlist: boolean,
    description: string,
    count: number
}