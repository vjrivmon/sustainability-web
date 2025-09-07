import React from 'react';
import { Leaf, Recycle, Award, Heart } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Started with a vision to revolutionize textile industry through sustainable practices.'
    },
    {
      year: '2021',
      title: 'First Collection',
      description: 'Launched our first line of organic cotton and recycled polyester fabrics.'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Added bamboo and hemp fabrics, earning organic certification.'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Developed new recycling processes, saving 2 million liters of water.'
    },
    {
      year: '2024',
      title: 'Recognition',
      description: 'Received sustainability awards and expanded to international markets.'
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Eco-Friendly',
      description: 'Every fabric is produced with minimal environmental impact using sustainable methods.'
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: 'Circular Economy',
      description: 'We transform waste materials into high-quality fabrics, closing the loop.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality First',
      description: 'Sustainable doesn\'t mean compromise. Our fabrics meet the highest quality standards.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Social Impact',
      description: 'Supporting fair trade practices and local communities throughout our supply chain.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Sustainable Story
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for environmental responsibility and textile excellence, 
            we're pioneering the future of sustainable fabric production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center slide-up" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {value.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {value.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-12 text-primary">
            Our Journey Towards Sustainability
          </h3>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm z-10">
                  {item.year}
                </div>
                
                <div className={`ml-24 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-lg mb-2 text-primary">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            "To transform the textile industry by creating beautiful, high-quality fabrics 
            that respect our planet and support sustainable practices. Every yard we produce 
            is a step towards a cleaner, more responsible future for fashion and design."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;