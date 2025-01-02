// /app/components/Hero.tsx
export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Shop</h1>
                <p className="text-lg mb-8">Find the best deals on high-quality products</p>
                <a href="#products" className="bg-blue-600 px-6 py-3 text-xl font-semibold rounded-full hover:bg-blue-700 transition duration-300">Shop Now</a>
            </div>
        </section>
    );
}
