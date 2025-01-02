// /app/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p>&copy; 2025 ShopLogo. All rights reserved.</p>
                </div>
                <div className="space-x-6">
                    <a href="#" className="hover:text-gray-300">About Us</a>
                    <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
            </div>
        </footer>
    );
}
