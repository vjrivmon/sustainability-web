import React from 'react';
import { Droplets, Zap, Recycle, TreePine, Award, Target } from 'lucide-react';

const Sustainability = () => {
  const metrics = [
    {
      icon: <Droplets className="h-8 w-8" />,
      value: '2.5M',
      unit: 'Liters',
      description: 'Water Saved Annually',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      value: '850K',
      unit: 'Bottles',
      description: 'Plastic Bottles Recycled',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: '65%',
      unit: 'Less',
      description: 'Energy Consumption',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      value: '340',
      unit: 'Tons',
      description: 'CO₂ Emissions Prevented',
      color: 'from-emerald-400 to-emerald-600'
    }
  ];

  const initiatives = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'GOTS Certified',
      description: 'Global Organic Textile Standard certification for organic fiber products.'
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: 'Circular Production',
      description: 'Closed-loop manufacturing process that minimizes waste and maximizes resource efficiency.'
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'Water Recovery',
      description: 'Advanced water treatment and recovery systems in all production facilities.'
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: 'Carbon Neutral',
      description: 'Offset all carbon emissions through renewable energy and reforestation projects.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Zero Waste Goal',
      description: 'Working towards zero landfill waste by 2030 through innovation and partnerships.'
    }
  ];

  const certifications = [
    { name: 'GOTS', description: 'Global Organic Textile Standard' },
    { name: 'OEKO-TEX', description: 'Standard 100 Certified' },
    { name: 'GRS', description: 'Global Recycled Standard' },
    { name: 'CRADLE TO CRADLE', description: 'Circular Economy Certified' }
  ];

  return (
    <section id="sustainability" className="section-padding bg-gradient-to-br from-primary to-accent text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transparency is key to our sustainability mission. Here's how we're making a 
            measurable difference for our planet and future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(metrics || []).map((metric, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-r ${metric.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-white/80 mb-2">
                {metric.unit}
              </div>
              <div className="text-sm text-white/90 leading-tight">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our Sustainable Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Collect', desc: 'Gather post-consumer materials' },
              { step: '02', title: 'Sort', desc: 'Separate materials by type and quality' },
              { step: '03', title: 'Process', desc: 'Transform using eco-friendly methods' },
              { step: '04', title: 'Weave', desc: 'Create premium sustainable fabrics' },
              { step: '05', title: 'Deliver', desc: 'Ship using carbon-neutral logistics' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/30"></div>
                )}
                <div className="bg-secondary text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Sustainability Initiatives</h3>
            <div className="space-y-6">
              {(initiatives || []).map((initiative, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    {initiative.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{initiative.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Certifications & Standards</h3>
            <div className="grid grid-cols-2 gap-4">
              {(certifications || []).map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/10 p-6 rounded-xl text-center slide-up"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="font-bold text-lg mb-2">{cert.name}</div>
                  <div className="text-white/80 text-sm">{cert.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">2030 Goals</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>100% renewable energy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Zero waste to landfill</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>50% reduction in water usage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Carbon negative operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Sustainability Mission</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every purchase supports our environmental initiatives and helps create a more sustainable future for the textile industry.
          </p>
          <a href="#contact" className="btn-secondary no-underline">
            Learn More About Our Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;