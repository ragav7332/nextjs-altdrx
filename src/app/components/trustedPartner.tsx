
import React from 'react';
const TrustedPartnerSection = () => {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "icici.png",
              "eylogo.png",
              "induslaw.png",
              "Knight.png",
              "mitcoin.png",
              "orbis.png",
              "partner.png"
            ].map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img src={partner} alt={`Partner ${index + 1}`} className="h-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TrustedPartnerSection;
  