import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar errores cuando el usuario comience a escribir
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simular envío de formulario
      console.log('Form submitted:', formData);
      
      // Aquí iría la integración real con un servicio de email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Our Showroom',
      details: ['1234 Sustainable Ave', 'Green City, GC 12345', 'United States'],
      action: 'Get Directions'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      action: 'Call Now'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: ['sales@af-fabrics.com', 'info@af-fabrics.com'],
      action: 'Send Email'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make your next project more sustainable? We're here to help you find 
            the perfect eco-friendly fabrics for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                      formErrors.name ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                      formErrors.email ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                    formErrors.subject ? 'border-red-500' : 'border-neutral-300'
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="custom-order">Custom Order</option>
                  <option value="samples">Sample Request</option>
                  <option value="wholesale">Wholesale Pricing</option>
                  <option value="sustainability">Sustainability Information</option>
                  <option value="other">Other</option>
                </select>
                {formErrors.subject && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                    formErrors.message ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="Tell us about your project and requirements..."
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  ✗ There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-neutral-600 text-sm mb-1">
                          {detail}
                        </p>
                      ))}
              <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium mt-2 no-underline inline-block">
                {info.action} →
              </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h4 className="font-semibold text-primary">Business Hours</h4>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0">
                    <span className="text-neutral-700 text-sm">{schedule.day}</span>
                    <span className="text-neutral-600 text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-6 w-6" />
                <h4 className="font-semibold">Global Shipping</h4>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                We ship our sustainable fabrics worldwide with carbon-neutral logistics partners. 
                Special rates available for bulk orders.
              </p>
              <a href="#" className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors no-underline inline-block">
                Check Shipping Rates
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Do you offer fabric samples?",
                answer: "Yes! We provide free samples up to 6\" x 6\" for all our fabrics. Larger samples available for a small fee."
              },
              {
                question: "What's your minimum order quantity?",
                answer: "Our minimum order is 1 yard for retail customers. Wholesale minimums vary by fabric type."
              },
              {
                question: "How long does shipping take?",
                answer: "Domestic orders typically ship within 2-3 business days. International shipping varies by location."
              },
              {
                question: "Can you match custom colors?",
                answer: "Yes, we offer custom color matching services for orders over 100 yards using eco-friendly dyes."
              }
            ].map((faq, index) => (
              <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-semibold text-primary mb-2">{faq.question}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;