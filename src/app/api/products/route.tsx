// /app/api/products/route.ts
import { NextResponse } from 'next/server';
import I1 from "../../../../public/images/purse.png"
import I2 from "../../../../public/images/keyborad.jpg"
import I3 from "../../../../public/images/DALL·E 2025-02-13 22.13.05 - A high-quality mechanical gaming keyboard with RGB lighting, durable key switches, and a sleek black design.webp"
import I4 from "../../../../public/images/speaker.jpg"
import I5 from "../../../../public/images/phone'.jpg"
import I6 from "../../../../public/images/headphone.jpg"
import I7 from "../../../../public/images/watch.jpg"
import I8 from "../../../../public/images/lap.jpg"
import I9 from "../../../../public/images/dslr.jpg"
import I10 from "../../../../public/images/vr.jpg"




export async function GET() {
    const products = [
        { id: 1, name: 'Leather Purse', price: 100, description: 'A stylish leather purse with multiple compartments.', image: I1 },
        { id: 2, name: 'Wireless Keyboard', price: 200, description: 'Ergonomic wireless keyboard with long battery life.', image: I2 },
        { id: 3, name: 'Mechanical Gaming Keyboard', price: 250, description: 'High-quality mechanical keyboard with RGB lighting.', image: I3 },
        { id: 4, name: 'Bluetooth Speaker', price: 300, description: 'Portable Bluetooth speaker with deep bass and long battery life.', image: I4 },
        { id: 5, name: 'Smartphone', price: 350, description: 'Latest model smartphone with advanced features.', image: I5 },
        { id: 6, name: 'Wireless Headphones', price: 400, description: 'Noise-canceling wireless headphones with deep bass.', image: I6 },
        { id: 7, name: 'Smart Watch', price: 450, description: 'A modern smartwatch with fitness tracking features.', image: I7 },
        { id: 8, name: 'Gaming Laptop', price: 500, description: 'High-performance gaming laptop with powerful GPU.', image: I8 },
        { id: 9, name: 'DSLR Camera', price: 550, description: 'Professional DSLR camera with 4K video recording.', image: I9 },
        { id: 10, name: 'VR Headset', price: 600, description: 'Immersive virtual reality headset for gaming and entertainment.', image: I10 }
    ];
    

    return NextResponse.json(products);
}
