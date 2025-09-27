import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FounderNote = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section className="py-16 bg-porcelain">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Founder Portrait */}
          <div className="flex-shrink-0">
            <img 
              src="/Untitled design (38).png" 
              alt="Joseph Castillo" 
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-sand/30"
            />
          </div>
          
          {/* Founder Message */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-4">
              My Story
            </h2>
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
              From Broken Strands to Noir Roots
            </h3>
            <div className="space-y-4 text-base font-source text-charcoal/80 leading-relaxed">
              <p>
                For years, I was on a frantic search for the "perfect" hair oil. I tried every store-bought bottle promising lush growth, incredible shine, and miracle repairs. Instead of the healthy hair of my dreams, I was handed a nightmare. My hair became brittle, my scalp irritated, and the most terrifying part, chunks of my hair started falling out.
              </p>
              
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="flex items-center space-x-2 text-deep-green hover:text-deep-green/80 transition-colors font-semibold mt-4"
              >
                <span>{showFullStory ? 'Show Less' : 'Read Full Story'}</span>
                {showFullStory ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {showFullStory && (
                <>
                  <p>
                    I felt defeated. I was heartbroken, staring at broken strands in my brush, wondering what I had done wrong. I realized then that these mass produced formulas, filled with silicones, alcohols, and harsh synthetics, weren't nourishing my hair; they were suffocating it. They were designed for a generic idea of hair, not for my hair.
                  </p>
                  <p>
                    Enough was enough. I decided if I couldn't find a product I trusted, I would create one.
                  </p>
                  <p>
                    Armed with desperation and determination, I turned to the wisdom of nature. I spent months researching, blending, and testing in my own kitchen. I wasn't interested in a quick fix; I was building a ritual. The answer wasn't in one magic ingredient, but in a powerful, synergistic blend of these six potent, natural oils.
                  </p>
                  <p className="font-semibold text-deep-green">
                    This blend was my game-changer.
                  </p>
                  <p>
                    I gently massaged this aromatic, luxurious oil into my scalp and lengths. Slowly, then undeniably, my hair began to respond. The shedding stopped. My broken hair began to feel strong again. I saw baby hairs, then full-grown new strands, filling in the sparse areas I thought were lost forever. I had not just fixed my hair; I had brought it back to life.
                  </p>
                  <p>
                    This recipe was my most guarded secret. For years, I gatekept this personal elixir, this little bottle of magic that transformed my confidence along with my hair.
                  </p>
                  <p>
                    But beautiful hair shouldn't be a secret. It should be a shared joy.
                  </p>
                  <p>
                    Now, I'm breaking my silence. I'm sharing the formula that saved my hair with you. Noir Roots is more than just a hair oil; it's the result of my journey, my frustration, and my ultimate triumph. It's crafted with intention, purity, and a deep belief in the power of nature.
                  </p>
                  <p className="font-semibold">
                    This is the oil I wish I had found all those years ago.
                  </p>
                  <p>
                    Welcome to Noir Roots. I can't wait for it to change your story, too.
                  </p>
                  <p className="italic">
                    With love and strong hair,
                  </p>
                  <p className="font-semibold text-deep-green">
                    Joseph Castillo<br />
                    Founder, Noir Roots
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;