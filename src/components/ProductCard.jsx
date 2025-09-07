import React, { useState } from 'react';
import { Leaf, Recycle, Award, ShoppingCart, Shirt, Scissors } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);

  // Función para convertir color hex a rgba
  const hexToRgba = (hex, alpha) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return `rgba(45, 95, 63, ${alpha})`; // Color primario por defecto
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
  };

  const getSustainabilityIcon = (product) => {
    if (product.sustainability.recycledContent > 80) return <Recycle className="h-4 w-4" />;
    if (product.sustainability.organicCertified) return <Award className="h-4 w-4" />;
    return <Leaf className="h-4 w-4" />;
  };

  const getSustainabilityBadge = (product) => {
    if (product.sustainability.recycledContent > 80) return "95% Recycled";
    if (product.sustainability.organicCertified) return "Organic";
    return "Eco-Friendly";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-90"
          style={{ 
            background: `linear-gradient(135deg, ${hexToRgba(selectedVariation.color, 0.3)}, ${hexToRgba(selectedVariation.color, 0.8)}, ${hexToRgba(selectedVariation.color, 0.5)})` 
          }}
        ></div>
        
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white via-transparent to-primary/10"></div>
        
        {/* Patrón decorativo para simular textura de tela */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Icono central representativo del tipo de tela */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Shirt className="h-24 w-24 text-primary" />
        </div>
        
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
          {getSustainabilityIcon(product)}
          <span>{getSustainabilityBadge(product)}</span>
        </div>
        
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="btn-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg text-primary mb-2">
          {product.name}
        </h3>
        
        <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-neutral-700">
              {selectedVariation.name}
            </span>
            <span className="text-lg font-bold text-primary">
              ${selectedVariation.price}
            </span>
          </div>
          
          <div className="flex space-x-2">
            {product.variations.map((variation) => (
              <button
                key={variation.id}
                onClick={() => setSelectedVariation(variation)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedVariation.id === variation.id
                    ? 'border-primary scale-110'
                    : 'border-neutral-300 hover:border-primary'
                }`}
                style={{ backgroundColor: variation.color }}
                title={variation.name}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs text-neutral-600">
          {product.sustainability.recycledContent > 0 && (
            <div className="flex items-center space-x-1">
              <Recycle className="h-3 w-3 text-primary" />
              <span>{product.sustainability.recycledContent}% Recycled</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Leaf className="h-3 w-3 text-primary" />
            <span>{product.sustainability.waterSaving}% Water Saved</span>
          </div>
          {product.sustainability.organicCertified && (
            <div className="flex items-center space-x-1">
              <Award className="h-3 w-3 text-primary" />
              <span>Organic Certified</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <div className={`h-2 w-2 rounded-full ${
              product.sustainability.carbonFootprint === 'Very Low' ? 'bg-green-500' :
              product.sustainability.carbonFootprint === 'Low' ? 'bg-yellow-500' : 'bg-orange-500'
            }`}></div>
            <span>{product.sustainability.carbonFootprint} Carbon</span>
          </div>
        </div>

        <div className="mt-4 text-xs text-neutral-500">
          {selectedVariation.stock > 50 ? 'In Stock' : 
           selectedVariation.stock > 10 ? 'Limited Stock' : 'Low Stock'}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;