// import React from 'react';
// import { Card } from './ui/card';
// const InvestmentStagesSection = () => {
//     return (
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Investment Stages</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { stage: "Initial Investment", details: "Invest a minimum amount." },
//               { stage: "Growth Period", details: "Watch your investment grow." },
//               { stage: "Exit Strategy", details: "Options for cashing out." },
//             ].map((stage, index) => (
//               <Card key={index} className="p-6 text-center">
//                 <h3 className="text-xl font-semibold mb-4">{stage.stage}</h3>
//                 <p className="text-gray-600">{stage.details}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };

//   export default InvestmentStagesSection;

// import React from 'react';

// const InvestmentStagesSection = () => {
//   const stages = [
//     {
//       title: "GET STARTED",
//       description: "Sign up\nComplete your KYC\nChoose the best investment deal\nStart investments with Alt DRX!",
//     },
//     {
//       title: "Get Early Bird Deals",
//       description: "Get early bird investment deals. Sell your ALT.SQFT later, for a profit.",
//     },
//     {
//       title: "First Opportunity",
//       description: "Start investing in Real Estate 1 SQ.FT(ALT.SQFT) at a time with as little as ₹10,000.",
//     },
//     {
//       title: "Person-to-Person Trading",
//       description: "Person to Person trading in ALT.SQFT, creating a vibrant Real Estate marketplace.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Investment Stages
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stages.map((stage, index) => (
//             <div key={index} className="relative perspective">
//               <div className="card w-full h-64 bg-white shadow-lg rounded-lg transition-transform duration-500 hover:rotate-y-180">
//                 <div className="inner">
//                   <div className="front flex flex-col justify-center items-center h-full p-4">
//                     <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
//                     <p className="text-gray-600">{stage.description.split('\n')[0]}</p>
//                   </div>
//                   <div className="back flex flex-col justify-center items-center h-full p-4 bg-blue-600 text-white rounded-lg">
//                     <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
//                     <p className="text-gray-200">{stage.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .perspective {
//           perspective: 1000px;
//         }
//         .card {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//         }
//         .inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transition: transform 0.5s;
//         }
//         .card:hover .inner {
//           transform: rotateY(180deg);
//         }
//         .front,
//         .back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//         }
//         .back {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default InvestmentStagesSection;

import React from 'react';

const InvestmentStagesSection = () => {
  const stages = [
    {
      title: "GET STARTED",
      description: "Sign up\nComplete your KYC\nChoose the best investment deal\nStart investments with Alt DRX!",
    },
    {
      title: "Get Early Bird Deals",
      description: "Get early bird investment deals. Sell your ALT.SQFT later, for a profit.",
    },
    {
      title: "First Opportunity",
      description: "Start investing in Real Estate 1 SQ.FT(ALT.SQFT) at a time with as little as ₹10,000.",
    },
    {
      title: "Person-to-Person Trading",
      description: "Person to Person trading in ALT.SQFT, creating a vibrant Real Estate marketplace.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Investment Stages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="relative perspective">
              <div className="card w-full h-64 bg-white shadow-lg rounded-lg transition-transform duration-500 hover:rotate-y-180">
                <div className="inner">
                  <div className="front flex flex-col justify-center items-center h-full p-4">
                    <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                    <p className="text-gray-600">{stage.description.split('\n')[0]}</p>
                  </div>
                  <div className="back flex flex-col justify-center items-center h-full p-4 bg-blue-600 text-white rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                    <p className="text-gray-200">{stage.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .card {
          position: relative;
          width: 100%;
          height: 16rem; /* Fixed height for the card */
          transform-style: preserve-3d;
          background-color: #ffffff; /* Set a consistent background color */
        }
        .inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.5s;
        }
        .card:hover .inner {
          transform: rotateY(180deg);
        }
        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex; /* Center content */
          justify-content: center; /* Center content vertically */
          align-items: center; /* Center content horizontally */
        }
        .back {
          transform: rotateY(180deg);
        }
        .back p {
          display: none; /* Hide description on back */
        }
        .card:hover .back p {
          display: block; /* Show description on back when hovered */
        }
        .card:hover .front {
          display: none; /* Hide front content when hovered */
        }
      `}</style>
    </section>
  );
};

export default InvestmentStagesSection;


