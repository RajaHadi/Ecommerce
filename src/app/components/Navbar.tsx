// /app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-3xl font-bold text-white hover:text-gray-300">
                    RajaShop
                </Link>
                <div className="space-x-6">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/products" className="hover:text-gray-300">Products</Link>
                    <Link href="/cart" className="hover:text-gray-300">Cart</Link>
                </div>
            </div>
        </nav>
    );
}
