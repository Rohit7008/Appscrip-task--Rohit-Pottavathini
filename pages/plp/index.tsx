import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '../../components/plp/Header';
import SidebarFilters from '../../components/plp/SidebarFilters';
import ProductGrid from '../../components/plp/ProductGrid';
import Footer from '../../components/plp/Footer';
import './plp.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface PLPProps {
  products: Product[];
  categories: string[];
}

export default function PLP({ products: initialProducts, categories }: PLPProps) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    categories: [],
    priceRange: []
  });
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType]?.includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...(prev[filterType] || []), value]
    }));
  };

  return (
    <>
      <Head>
        <title>Shop Premium Products | Latest Collection</title>
        <meta name="description" content="Discover our curated collection of premium products. Shop the latest trends in fashion, accessories, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shop Premium Products | Latest Collection" />
        <meta property="og:description" content="Discover our curated collection of premium products. Shop the latest trends in fashion, accessories, and more." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Premium Products Collection",
              "description": "Discover our curated collection of premium products",
              "numberOfItems": products.length,
              "itemListElement": products.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.name,
                  "description": product.description,
                  "image": product.image,
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
      
      <main className="plp">
        <div className="container">
          <div className="plp__header">
            <h1 className="plp__title">Latest Collection</h1>
            <p className="plp__description">Discover our curated selection of premium products</p>
          </div>
          
          <div className="plp__content">
            <aside className="plp__sidebar">
              <SidebarFilters
                onFilterChange={handleFilterChange}
                selectedFilters={selectedFilters}
              />
            </aside>
            
            <section className="plp__products">
              <ProductGrid
                products={products}
                loading={loading}
              />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // In a real application, fetch from your API
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    return {
      props: {
        products,
        categories: ['All Products', 'Clothing', 'Accessories', 'Footwear']
      }
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
        categories: []
      }
    };
  }
}; 