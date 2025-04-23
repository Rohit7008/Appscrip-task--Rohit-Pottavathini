import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '../components/plp/Header';
import HeroSection from '../components/plp/HeroSection';
import FilterSection from '../components/plp/FilterSection';
import ProductGrid from '../components/plp/ProductGrid';
import ProductInfo from '../components/plp/ProductInfo';
import Footer from '../components/Footer';
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface HomeProps {
  products: Product[];
}

const Home = ({ products }: HomeProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    // You might want to show a toast notification here
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <Head>
        <title>Latest Arrivals | Shop Premium Products</title>
        <meta name="description" content="Discover our latest collection of premium products. Shop the newest arrivals in fashion, accessories, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Schema markup for the product listing page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": products.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.title,
                  "image": product.image,
                  "description": product.description,
                  "offers": {
                    "@type": "Offer",
                    "price": product.price,
                    "priceCurrency": "USD"
                  }
                }
              }))
            })
          }}
        />
      </Head>

      <Header />
      <HeroSection />
      <ProductInfo 
        itemCount={3425} 
        onToggleFilter={toggleFilter}
        isFilterVisible={isFilterVisible}
      />
      
      <main className="main-container">
        {isFilterVisible ? (
          <div className="content-wrapper">
            <aside className="filters-section">
              <FilterSection />
            </aside>
            
            <section className="products-section">
              <ProductGrid 
                products={products} 
                onAddToCart={handleAddToCart}
                isFilterVisible={isFilterVisible}
              />
            </section>
          </div>
        ) : (
          <section className="products-section-full">
            <ProductGrid 
              products={products} 
              onAddToCart={handleAddToCart}
              isFilterVisible={isFilterVisible}
            />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    
    return {
      props: {
        products
      }
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: []
      }
    };
  }
}; 