import React from 'react';
import { ArrowRight, Leaf, Recycle, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="h-8 w-8 text-secondary/60" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{animationDelay: '2s'}}>
        <Recycle className="h-10 w-10 text-secondary/40" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '4s'}}>
        <Award className="h-6 w-6 text-secondary/50" />
      </div>

      <div className="relative z-10 container-max text-center text-white">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sustainable
            <br />
            <span className="text-secondary">Fabrics</span>
            <br />
            for Tomorrow
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Discover our collection of eco-friendly, recycled, and organic fabrics. 
            Each yard represents our commitment to a sustainable future and premium quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#products" className="btn-secondary flex items-center space-x-2 no-underline">
              <span>Explore Collection</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="text-white hover:text-secondary transition-colors font-medium no-underline">
              Learn Our Story →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-white/80">Recycled Content</div>
            </div>
            <div className="slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-secondary mb-2">85%</div>
              <div className="text-white/80">Water Saved</div>
            </div>
            <div className="slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-white/80">Organic Certified</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;