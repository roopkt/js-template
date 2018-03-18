export interface Product {
    id: string;
    name: string;
    price: number;
}

export function generateMockProduct(): Product {
    return { id: '2', name: 'Apple', price: 0 };
}
