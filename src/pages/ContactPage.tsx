import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Noir Roots | Get in Touch</title>
        <meta name="description" content="Contact Noir Roots for questions about our hair oil, orders, or hair care advice. Based in Birmingham, UK." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              Get in Touch
            </h1>
            <p className="text-lg font-source text-black/70">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-black mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-source font-semibold text-black mb-1">Address</h3>
                    <p className="font-source text-black/70 text-sm leading-relaxed">
                      Noir Roots Ltd<br />
                      51 Pinfold Street<br />
                      Birmingham, B2 4AY<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-source font-semibold text-black mb-1">Email</h3>
                    <a 
                      href="mailto:thenoirroot@gmail.com"
                      className="font-source text-gold hover:text-gold/80 transition-colors"
                    >
                      thenoirroot@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-source font-semibold text-black mb-1">Response Time</h3>
                    <p className="font-source text-black/70 text-sm">
                      We typically respond within 24 hours during business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-source font-semibold text-black mb-4">Find Us</h3>
                <div className="bg-black/5 rounded-lg h-64 flex items-center justify-center border border-black/10">
                  <div className="text-center">
                    <MapPin className="text-black/30 mx-auto mb-2" size={32} />
                    <p className="font-source text-black/60 text-sm">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-black mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-6 text-center">
                  <h3 className="font-playfair font-semibold text-black mb-2">
                    Thank you for your message!
                  </h3>
                  <p className="font-source text-black/70 text-sm">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  name="contact"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div>
                    <label htmlFor="name" className="block font-source font-semibold text-black mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-source font-semibold text-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-source font-semibold text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}

              {/* FAQ Link */}
              <div className="mt-8 bg-white p-6 rounded-lg border border-black/10">
                <h3 className="font-playfair font-semibold text-black mb-2">
                  Quick Questions?
                </h3>
                <p className="font-source text-black/70 text-sm mb-4">
                  Check our FAQ page for instant answers to common questions about usage, ingredients, and shipping.
                </p>
                <a 
                  href="/faq"
                  className="font-source text-gold hover:text-gold/80 transition-colors text-sm font-semibold"
                >
                  View FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;