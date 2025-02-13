import Link from 'next/link';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Image from 'next/image';

async function fetchProducts() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    try {
        const res = await fetch(`${baseUrl}/api/products`);
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array as fallback
    }
}

export default async function Home() {
    const products = await fetchProducts();
    console.log(products)

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container mx-auto px-4 py-12" id="products">
                <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.length > 0 ? (
                        products.map((product: any) => (
                            <div
                                key={product.id}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <Image
                                    src={product.image || '/placeholder-image.png'}
                                    alt={product.name} // Dynamic alt text
                                    width={500}
                                    height={500}
                                    className="object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                                <p className="text-black mb-4">{product.description}</p>
                                <p className="text-xl text-blue-500 font-bold">${product.price}</p>
                                <Link
                                    href={`/product/${product.id}`}
                                    className="mt-4 inline-block bg-blue-600 px-4 py-2 text-white rounded-full hover:bg-blue-700 transition duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No products available at the moment.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
