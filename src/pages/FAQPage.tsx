import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I use the hair oil?",
      answer: "For best results, use 2-3 times per week. Those with dry or damaged hair may benefit from more frequent use, while those with fine or oily hair should start with once weekly and adjust as needed. Listen to your hair and adjust the frequency based on how it responds."
    },
    {
      question: "Is it safe for color-treated hair?",
      answer: "Yes, absolutely! All our ingredients are gentle and color-safe. The natural oils actually help protect and maintain color-treated hair by providing moisture and creating a protective barrier. Many of our customers with colored hair report improved color longevity and vibrancy."
    },
    {
      question: "Can I use it with protective styles?",
      answer: "Yes, the oil works wonderfully with protective styles like braids, twists, and updos. Apply a small amount to your scalp and hair before styling, or use it to refresh and moisturize while your hair is in a protective style. Focus on the scalp and any exposed ends."
    },
    {
      question: "I have a nut allergy - is this safe for me?",
      answer: "This oil contains Sweet Almond Oil, which is tree nut-derived. If you have any nut allergies or sensitivities, please avoid using this product. We also recommend doing a patch test before first use regardless of known allergies. Your safety is our priority."
    },
    {
      question: "When will my pre-order ship?",
      answer: "All pre-orders will be dispatched on October 22nd. You'll receive a tracking number via email once your order ships. We offer free shipping on orders over £50, and standard shipping typically takes 3-5 business days within the UK."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact us within 30 days of delivery for a full refund. The product should be at least 50% full for hygiene reasons. We'll provide a prepaid return label for your convenience."
    },
    {
      question: "Will it make my hair greasy?",
      answer: "When used correctly, no! The key is using the right amount for your hair type. Start with just 2-3 drops for fine hair, 4-5 for medium hair, and 6-8 for thick or very dry hair. The oil absorbs well and shouldn't leave residue when applied to damp (not soaking wet) hair."
    },
    {
      question: "Can men use this hair oil?",
      answer: "Absolutely! Hair oil benefits everyone regardless of gender. Many men love using it for beard care as well as scalp and hair health. The natural ingredients work the same way for all hair types and textures."
    },
    {
      question: "How long will one bottle last?",
      answer: "A 100ml bottle typically lasts 2-3 months with regular use (2-3 times per week). The exact duration depends on your hair length, thickness, and how much you use per application. A little goes a long way with our concentrated formula."
    },
    {
      question: "Is it suitable for all hair types?",
      answer: "Yes! Our blend is formulated to work with straight, wavy, curly, and coily hair textures. The lightweight oils absorb well into fine hair, while the nourishing ingredients provide enough moisture for thick, dry, or damaged hair. Adjust the amount and frequency based on your specific needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Noir Roots | Frequently Asked Questions</title>
        <meta name="description" content="Get answers to common questions about Noir Roots Hair Oil - usage, ingredients, shipping, returns, and more." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg font-source text-black/70">
              Everything you need to know about Noir Roots Hair Oil
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-black/10 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-black/5 transition-colors rounded-lg"
                >
                  <span className="font-source font-semibold text-black pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gold flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="font-source text-black/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-gold/10 p-8 rounded-lg border border-gold/20 text-center">
            <h2 className="text-2xl font-playfair font-bold text-black mb-4">
              Still Have Questions?
            </h2>
            <p className="font-source text-black/70 mb-6">
              We're here to help! Reach out to us directly and we'll get back to you within 24 hours.
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

export default FAQPage;