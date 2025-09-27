import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Will it make my hair greasy?",
      answer: "No, our lightweight formula absorbs quickly without leaving residue. Start with a few drops and adjust as needed."
    },
    {
      question: "How often should I use it?",
      answer: "Use 2-3 times per week for best results. Apply to damp or dry hair, focusing on ends and mid-lengths."
    },
    {
      question: "Is it safe for colored hair?",
      answer: "Yes, all ingredients are gentle and color-safe. The natural oils actually help protect color-treated hair."
    },
    {
      question: "Are there any allergy concerns?",
      answer: "This oil contains Sweet Almond Oil (tree nut-derived) and natural compounds like linalool from lavender/rosemary. Avoid use if you have nut allergies or sensitivity. For external use only."
    },
    {
      question: "What about shipping & returns?",
      answer: "Free shipping on all orders. 30-day money-back guarantee if you're not completely satisfied."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-porcelain">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-sand/30 rounded-lg bg-white/50 backdrop-blur-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/70 transition-colors"
              >
                <span className="font-source font-semibold text-charcoal">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-deep-green" />
                ) : (
                  <ChevronDown size={20} className="text-deep-green" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="font-source text-charcoal/80">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;