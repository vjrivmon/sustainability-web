import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? (products || [])
    : (products || []).filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sustainable Fabric Collection
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of eco-friendly fabrics. 
            Each product represents our commitment to quality, sustainability, and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center space-x-2 text-neutral-600 mr-4">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {(categories || []).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-600 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Need Custom Specifications?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            We offer custom fabric solutions tailored to your specific needs. 
            From color matching to special sustainability requirements, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary no-underline">
              Request Custom Quote
            </a>
            <a href="#contact" className="btn-secondary no-underline">
              Download Fabric Samples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;