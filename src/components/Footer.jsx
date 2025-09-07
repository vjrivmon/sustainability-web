import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Leaf, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'Organic Cotton',
        'Recycled Denim', 
        'Bamboo Fabrics',
        'Hemp Textiles',
        'Recycled Polyester',
        'Custom Solutions'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Sustainability',
        'Certifications', 
        'Quality Standards',
        'News & Updates',
        'Careers'
      ]
    },
    {
      title: 'Support',
      links: [
        'Contact Us',
        'Fabric Samples',
        'Shipping Info',
        'Returns Policy',
        'Size Guide',
        'FAQ'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Sustainability Report',
        'Care Instructions',
        'Technical Specs',
        'Color Matching',
        'Bulk Orders',
        'Trade Program'
      ]
    }
  ];

  const certifications = [
    'GOTS Certified',
    'OEKO-TEX Standard',
    'Global Recycled Standard',
    'Cradle to Cradle'
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-max">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Logo variant="light" className="mb-6" />
              <p className="text-white/80 leading-relaxed mb-6">
                Leading the sustainable textile revolution with premium eco-friendly fabrics. 
                Every yard represents our commitment to environmental responsibility and exceptional quality.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>1234 Sustainable Ave, Green City, GC 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span>info@af-fabrics.com</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4 text-secondary">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-white/80 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <Leaf className="h-4 w-4 text-secondary" />
              <span>Certified Sustainable:</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {certifications.map((cert, index) => (
                <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-white/90">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © 2024 AF Sustainable Fabrics. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for our planet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;