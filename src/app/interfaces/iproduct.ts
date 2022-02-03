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
    description: string,
    info: string,
    origins: string,
    howToCook: string,
    vitamins: [
        {   
            name: string,
            quantity: string,
            dv: number
        },
        {
            name: string,
            quantity: string,
            dv: number
        },
        {
            name: string,
            quantity: string,
            dv: number
        },
        {
            name: string,
            quantity: string,
            dv: number
        },
        {
            name: string,
            quantity: string,
            dv: number
        },
        {
            name: string,
            quantity: string,
            dv: number
        },
        {
            name: string,
            quantity: string,
            dv: number
        }
    ],
    sku: number,
    category: string,
    stock: string,
    buyby: string[],
    delivery: string,
    deliveryArea: string,
    freeShipping: boolean
}

export interface basketProduct extends iproduct {
    count: number
}