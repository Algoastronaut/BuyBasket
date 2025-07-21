import ProductsGrid from '../components/ProductsGrid';

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  // If no products, show a message
  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-100">
              Please try again later. We&apos;re experiencing technical difficulties.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-lg text-gray-100">
            Browse through our carefully curated collection of high-quality items
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-4 scrollbar-hide">
        {['All', 'Electronics', 'Jewelry', "Men&apos;s Clothing", "Women&apos;s Clothing"].map((category) => (
          <button
            key={category}
            className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 whitespace-nowrap transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <ProductsGrid products={products} />
    </div>
  );
} 