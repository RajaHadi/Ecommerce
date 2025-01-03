'use client';
// /app/product/[id]/page.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

async function fetchProduct(id: string) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products`);
    const products = await res.json();
    
    // Find the product with the matching id
    return products.find((product: { id: number; }) => product.id === parseInt(id));
}

export default function Product({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const loadProduct = async () => {
            const fetchedProduct = await fetchProduct(params.id);
            setProduct(fetchedProduct);
        };
        loadProduct();
    }, [params.id]);

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="flex justify-center">
                        <Image
                        width={1000}
                        height={1000}
                            src={product.image}
                            alt={product.name}
                            className="h-[500px] w-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-xl text-gray-600 mb-4">{product.description}</p>
                        <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</p>
                        
                        {/* Add to Cart Button */}
                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                        >
                            Add to Cart
                        </button>

                        {/* Product Features */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Features</h3>
                            <ul className="list-disc text-blue-700 pl-6">
                                <li>Feature 1: High-quality materials</li>
                                <li>Feature 2: Available in multiple colors</li>
                                <li>Feature 3: 1-year warranty</li>
                                {/* Add more features here */}
                            </ul>
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-8 ">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                                    <p className="text-gray-900">Great product, highly recommend!</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-yellow-500">⭐⭐⭐⭐</span>
                                    <p className="text-black">Good value for money</p>
                                </div>
                                {/* Add more reviews here */}
                            </div>
                        </div>

                        {/* Related Products */}
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                                {/* Assuming related products are fetched */}
                                {['Product 1', 'Product 2', 'Product 3', 'product 4'].map((relatedProduct, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                        <Image
                                        width={1000}
                                        height={1000}
                                            src={product.image}
                                            alt={relatedProduct}
                                            className="h-32 w-32 object-cover rounded-lg mb-4"
                                        />
                                        <h4 className="text-lg font-semibold text-blue-600">{relatedProduct}</h4>
                                        <p className="text-blue-600">$49.99</p>
                                        <Link
                                            href={`/product/${index + 1}`}
                                            className="mt-4 inline-block bg-blue-600 px-4 py-2 text-white rounded-full hover:bg-blue-700 transition duration-300"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
