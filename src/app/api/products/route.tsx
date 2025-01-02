// /app/api/products/route.ts
import { NextResponse } from 'next/server';
import I1 from "../../../../public/chicken.jpg"

export async function GET() {
    const products = [
        { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1', image: I1 },
        { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2', image: I1 },
        { id: 3, name: 'Product 3', price: 150, description: 'Description for Product 3', image: I1 },
        { id: 4, name: 'Product 4', price: 250, description: 'Description for Product 4', image: I1 },
        { id: 5, name: 'Product 5', price: 300, description: 'Description for Product 5', image: I1 },
        { id: 6, name: 'Product 6', price: 350, description: 'Description for Product 6', image: I1 },
        { id: 7, name: 'Product 7', price: 400, description: 'Description for Product 7', image: I1 },
        { id: 8, name: 'Product 8', price: 450, description: 'Description for Product 8', image: I1 },
        { id: 9, name: 'Product 9', price: 500, description: 'Description for Product 9', image: I1 },
        { id: 10, name: 'Product 10', price: 550, description: 'Description for Product 10', image: I1 }
    ];

    return NextResponse.json(products);
}
