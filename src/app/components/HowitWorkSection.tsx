import React from 'react';
import { Card } from './ui/card';
const HowItWorksSection = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Step 1: Sign Up",
                description: "Create an account to get started.",
              },
              {
                title: "Step 2: Explore Properties",
                description: "Browse through our listed properties.",
              },
              {
                title: "Step 3: Invest",
                description: "Choose a property and make your investment.",
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorksSection;