import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PoliciesPage = () => {
  const [activePolicy, setActivePolicy] = useState('shipping');

  const policies = {
    shipping: {
      title: 'Shipping & Delivery',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Shipping Options</h3>
            <ul className="font-source text-black/80 space-y-2 text-sm">
              <li>• <strong>Standard Shipping:</strong> 3-5 business days within the UK</li>
              <li>• <strong>Free Shipping:</strong> On orders over £50</li>
              <li>• <strong>Express Shipping:</strong> 1-2 business days (additional cost)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Pre-Order Information</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              All current orders are pre-orders and will be dispatched on October 22nd. You will receive a tracking number 
              via email once your order ships. No payment is taken until your order is ready to ship.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">International Shipping</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              Currently, we only ship within the United Kingdom. International shipping will be available in the future. 
              Sign up for our newsletter to be notified when we expand shipping options.
            </p>
          </div>
        </div>
      )
    },
    returns: {
      title: 'Returns & Refunds',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">30-Day Money-Back Guarantee</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed mb-3">
              We stand behind our product with a 30-day money-back guarantee. If you're not completely satisfied 
              with your purchase, you can return it for a full refund.
            </p>
            <ul className="font-source text-black/80 space-y-2 text-sm">
              <li>• Return window: 30 days from delivery date</li>
              <li>• Product must be at least 50% full for hygiene reasons</li>
              <li>• Original packaging preferred but not required</li>
              <li>• We provide prepaid return labels</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">How to Return</h3>
            <ol className="font-source text-black/80 space-y-2 text-sm">
              <li>1. Email us at thenoirroot@gmail.com with your order number</li>
              <li>2. We'll send you a prepaid return label within 24 hours</li>
              <li>3. Package the item securely and attach the return label</li>
              <li>4. Drop off at any Royal Mail location</li>
              <li>5. Refund processed within 5-7 business days of receipt</li>
            </ol>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Damaged or Defective Items</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              If you receive a damaged or defective product, contact us immediately. We'll arrange for a replacement 
              or full refund at no cost to you, including return shipping.
            </p>
          </div>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Information We Collect</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed mb-3">
              We collect information you provide directly to us, such as when you create an account, make a purchase, 
              or contact us for support.
            </p>
            <ul className="font-source text-black/80 space-y-2 text-sm">
              <li>• Name and contact information</li>
              <li>• Billing and shipping addresses</li>
              <li>• Payment information (processed securely by our payment provider)</li>
              <li>• Communication preferences</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">How We Use Your Information</h3>
            <ul className="font-source text-black/80 space-y-2 text-sm">
              <li>• Process and fulfill your orders</li>
              <li>• Send order confirmations and shipping updates</li>
              <li>• Provide customer support</li>
              <li>• Send marketing communications (with your consent)</li>
              <li>• Improve our products and services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Data Protection</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              We implement appropriate security measures to protect your personal information. We do not sell, 
              trade, or rent your personal information to third parties. We comply with UK GDPR requirements.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Your Rights</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              You have the right to access, update, or delete your personal information. Contact us at 
              thenoirroot@gmail.com to exercise these rights.
            </p>
          </div>
        </div>
      )
    },
    terms: {
      title: 'Terms of Service',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Acceptance of Terms</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision 
              of this agreement. These terms apply to all visitors, users, and customers.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Product Information</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              We strive to provide accurate product information, but we do not warrant that product descriptions 
              or other content is accurate, complete, reliable, or error-free. Colors and appearance may vary 
              slightly from images shown.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Pricing and Availability</h3>
            <ul className="font-source text-black/80 space-y-2 text-sm">
              <li>• All prices are in British Pounds (GBP) and include VAT where applicable</li>
              <li>• Prices are subject to change without notice</li>
              <li>• We reserve the right to limit quantities</li>
              <li>• Pre-order items will be charged when ready to ship</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Limitation of Liability</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              Noir Roots Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-black mb-3">Contact Information</h3>
            <p className="font-source text-black/80 text-sm leading-relaxed">
              Questions about the Terms of Service should be sent to us at thenoirroot@gmail.com.
            </p>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <Helmet>
        <title>Policies - Noir Roots | Shipping, Returns, Privacy & Terms</title>
        <meta name="description" content="Read our policies on shipping, returns, privacy, and terms of service. Clear, transparent policies for your peace of mind." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              Policies
            </h1>
            <p className="text-lg font-source text-black/70">
              Clear, transparent policies for your peace of mind
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Policy Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                {Object.entries(policies).map(([key, policy]) => (
                  <button
                    key={key}
                    onClick={() => setActivePolicy(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-source font-semibold transition-colors ${
                      activePolicy === key
                        ? 'bg-gold text-black'
                        : 'bg-white text-black/70 hover:bg-black/5'
                    }`}
                  >
                    {policy.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Policy Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-black/10 p-8">
                <h2 className="text-2xl font-playfair font-bold text-black mb-6">
                  {policies[activePolicy as keyof typeof policies].title}
                </h2>
                {policies[activePolicy as keyof typeof policies].content}
              </div>
            </div>
          </div>

          {/* Contact for Questions */}
          <div className="mt-12 bg-gold/10 p-8 rounded-lg border border-gold/20 text-center">
            <h2 className="text-2xl font-playfair font-bold text-black mb-4">
              Questions About Our Policies?
            </h2>
            <p className="font-source text-black/70 mb-6">
              If you have any questions about our policies, please don't hesitate to contact us.
            </p>
            <a
              href="/contact#top"
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliciesPage;