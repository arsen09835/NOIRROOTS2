import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, Moon, Sparkles } from 'lucide-react';

const HowToUsePage = () => {
  const methods = [
    {
      icon: <Clock className="text-gold" size={32} />,
      title: "Pre-wash Treatment",
      timing: "30-60 minutes before washing",
      instructions: [
        "Apply 5-8 drops to dry hair, focusing on mid-lengths and ends",
        "Gently massage into scalp with fingertips for 2-3 minutes", 
        "Comb through with wide-tooth comb to distribute evenly",
        "Leave for 30-60 minutes, then shampoo as usual",
        "Perfect for weekly deep conditioning"
      ],
      bestFor: "Deep nourishment and repair"
    },
    {
      icon: <Moon className="text-gold" size={32} />,
      title: "Overnight Intensive",
      timing: "Apply before bed, wash in morning",
      instructions: [
        "Apply 3-5 drops to damp (not wet) hair after showering",
        "Focus on ends and any areas needing extra care",
        "Gently massage into scalp if treating dryness",
        "Wrap hair in silk scarf or use silk pillowcase",
        "Shampoo lightly in the morning if needed"
      ],
      bestFor: "Maximum hydration and growth support"
    },
    {
      icon: <Sparkles className="text-gold" size={32} />,
      title: "Finishing Touch",
      timing: "On damp or dry hair as needed",
      instructions: [
        "Use just 2-3 drops - a little goes a long way",
        "Warm between palms before applying",
        "Focus on ends and any frizzy areas",
        "Avoid roots if you have fine or oily hair",
        "Perfect for daily shine and protection"
      ],
      bestFor: "Instant shine and frizz control"
    }
  ];

  const tips = [
    {
      title: "Start Small",
      description: "Always begin with fewer drops than you think you need. You can add more, but you can't take it away."
    },
    {
      title: "Warm It Up", 
      description: "Warming the oil between your palms helps it absorb better and feel more luxurious."
    },
    {
      title: "Focus on Ends",
      description: "Your hair ends are the oldest and most damaged part. They need the most attention."
    },
    {
      title: "Listen to Your Hair",
      description: "Adjust frequency based on how your hair responds. Some need it daily, others twice weekly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>How to Use - Noir Roots Hair Oil | Application Guide</title>
        <meta name="description" content="Learn the three ways to use Noir Roots Hair Oil: pre-wash treatment, overnight intensive, and finishing touch. Get the best results with our expert tips." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              How to Use Your Hair Oil
            </h1>
            <p className="text-lg font-source text-black/70 max-w-2xl mx-auto">
              Three versatile application methods to fit your routine and hair needs
            </p>
          </div>

          {/* Application Methods */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {methods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-black/10 p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h2 className="text-xl font-playfair font-bold text-black mb-2">
                    {method.title}
                  </h2>
                  <p className="font-source text-gold text-sm font-semibold">
                    {method.timing}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-source font-semibold text-black mb-2">Instructions:</h3>
                    <ol className="space-y-2">
                      {method.instructions.map((step, stepIndex) => (
                        <li key={stepIndex} className="font-source text-black/70 text-sm flex">
                          <span className="text-gold font-semibold mr-2 flex-shrink-0">
                            {stepIndex + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <p className="font-source text-black/80 text-sm">
                      <strong>Best for:</strong> {method.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pro Tips */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-playfair font-bold text-black mb-6 text-center">
              Pro Tips for Best Results
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-source font-semibold text-black mb-1">{tip.title}</h3>
                    <p className="font-source text-black/70 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frequency Guide */}
          <div className="bg-gold/10 p-8 rounded-lg border border-gold/20">
            <h2 className="text-2xl font-playfair font-bold text-black mb-6 text-center">
              How Often Should You Use It?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-playfair font-semibold text-black mb-2">Dry/Damaged Hair</h3>
                <p className="font-source text-black/70 text-sm">
                  2-3 times per week, focusing on pre-wash and overnight treatments
                </p>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-black mb-2">Normal Hair</h3>
                <p className="font-source text-black/70 text-sm">
                  1-2 times per week, alternating between methods based on needs
                </p>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-black mb-2">Fine/Oily Hair</h3>
                <p className="font-source text-black/70 text-sm">
                  1-2 times per week, focusing on ends only with finishing touch method
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToUsePage;