import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, MessageCircle } from 'lucide-react';

const ReviewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Reviews - Noir Roots | Customer Testimonials</title>
        <meta name="description" content="Read what customers are saying about Noir Roots Hair Oil. Real reviews from real people experiencing healthier hair." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg font-source text-black/70">
              Real experiences from our hair care community
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-gold" size={32} />
            </div>
            
            <h2 className="text-2xl font-playfair font-bold text-black mb-4">
              Reviews Coming Soon
            </h2>
            
            <p className="font-source text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're currently in pre-order phase and can't wait to share the experiences of our first customers. 
              Once our hair oil starts shipping in October, you'll find authentic reviews and testimonials right here.
            </p>

            {/* Review Structure Preview */}
            <div className="bg-cream p-6 rounded-lg mb-8">
              <h3 className="font-playfair font-semibold text-black mb-4">What to Expect:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-source font-semibold text-black mb-2">Verified Reviews</h4>
                  <p className="font-source text-black/70 text-sm">
                    Only reviews from verified purchasers to ensure authenticity
                  </p>
                </div>
                <div>
                  <h4 className="font-source font-semibold text-black mb-2">Detailed Experiences</h4>
                  <p className="font-source text-black/70 text-sm">
                    Hair type, usage method, and results after different time periods
                  </p>
                </div>
                <div>
                  <h4 className="font-source font-semibold text-black mb-2">Photo Reviews</h4>
                  <p className="font-source text-black/70 text-sm">
                    Before and after photos to show real transformations
                  </p>
                </div>
                <div>
                  <h4 className="font-source font-semibold text-black mb-2">Honest Feedback</h4>
                  <p className="font-source text-black/70 text-sm">
                    Both positive experiences and constructive feedback
                  </p>
                </div>
              </div>
            </div>

            {/* Sample Review Structure */}
            <div className="bg-white border border-black/10 rounded-lg p-6 text-left max-w-md mx-auto opacity-50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-gold fill-current" />
                  ))}
                </div>
                <span className="font-source text-black/60 text-sm">Verified Purchase</span>
              </div>
              
              <h4 className="font-source font-semibold text-black mb-2">
                "Amazing results after 4 weeks"
              </h4>
              
              <p className="font-source text-black/70 text-sm mb-3">
                My hair feels so much stronger and the shine is incredible. I use it twice a week as a pre-wash treatment...
              </p>
              
              <div className="flex items-center justify-between text-xs font-source text-black/60">
                <span>Sarah M. • Curly Hair • 4 weeks of use</span>
                <span>Helpful (12)</span>
              </div>
            </div>

            <p className="font-source text-black/60 text-sm mt-8">
              Be the first to review when you pre-order today
            </p>
          </div>

          {/* Review Schema Markup Ready */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Noir Roots Hair Oil",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "0",
                "reviewCount": "0"
              },
              "review": []
            })}
          </script>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;