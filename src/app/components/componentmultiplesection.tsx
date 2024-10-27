
// import React from 'react';
// import { Card } from './ui/card';
// const MultipleChoiceSection = () => {
//     return (
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Choose Your Investment</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { type: "Residential", description: "Invest in homes and apartments." },
//               { type: "Commercial", description: "Invest in office spaces and retail." },
//               { type: "Mixed-Use", description: "Diverse properties for varied returns." },
//             ].map((choice, index) => (
//               <Card key={index} className="p-6 text-center">
//                 <h3 className="text-xl font-semibold mb-4">{choice.type}</h3>
//                 <p className="text-gray-600">{choice.description}</p>
//                 <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   Select
//                 </button>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
//   export default MultipleChoiceSection;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Card } from './ui/card';

const options = [
    {
      type: "Student Housing",
      description: "Invest in affordable housing for students.",
      image: "housing images.jpg", // Replace with your image path
    },
    {
      type: "Rental Housing",
      description: "Invest in properties for long-term rental.",
      image: "rental_housing.jpg", // Replace with your image path
    },
    {
      type: "Holiday Homes",
      description: "Invest in properties for vacation rentals.",
      image: "Holiday_homes.jpg", // Replace with your image path
    },
    {
      type: "Rented Apartment",
      description: "Invest in ready-to-rent apartments.",
      image: "rentedApart.jpg", // Replace with your image path
    },
    {
      type: "Plotted Houses",
      description: "Invest in land for future development.",
      image: "plottedHouse.jpg", // Replace with your image path
    },
  ];

const MultipleChoiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Investment</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          {options.map((option, index) => (
            <SwiperSlide key={index}>
              <Card className="p-6 text-center">
                <img
                  src={option.image}
                  alt={option.type}
                  className="h-32 w-full object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">{option.type}</h3>
                <p className="text-gray-600">{option.description}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MultipleChoiceSection;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// import { Card } from './ui/card';

// // Options for the slider
// const options = [
//     {
//       type: "Student Housing",
//       description: "Invest in affordable housing for students.",
//       image: "housing images.jpg", // Replace with your image path
//     },
//     {
//       type: "Rental Housing",
//       description: "Invest in properties for long-term rental.",
//       image: "rental_housing.jpg", // Replace with your image path
//     },
//     {
//       type: "Holiday Homes",
//       description: "Invest in properties for vacation rentals.",
//       image: "Holiday_homes.jpg", // Replace with your image path
//     },
//     {
//       type: "Rented Apartment",
//       description: "Invest in ready-to-rent apartments.",
//       image: "rentedApart.jpg", // Replace with your image path
//     },
//     {
//       type: "Plotted Houses",
//       description: "Invest in land for future development.",
//       image: "plottedHouse.jpg", // Replace with your image path
//     },
//   ];

// const MultipleChoiceSection = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">Choose Your Investment</h2>
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={5} // Default to 1 slide on small screens
//           pagination={{ clickable: true }} // Enable pagination
//           navigation // Enable navigation
//           breakpoints={{
//             // Responsive breakpoints
//             640: {
//               slidesPerView: 1, // 2 slides on small devices
//             },
//             768: {
//               slidesPerView: 1, // 3 slides on medium devices
//             },
//           }}
//           className="mySwiper"
//         >
//           {options.map((option, type) => (
//             <SwiperSlide>
//               <Card className="p-6 text-center">
//                 <img
//                   src={option.image}
//                   alt={option.type}
//                   className="h-32 w-full object-cover rounded mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-4">{option.type}</h3>
//                 <p className="text-gray-600">{option.description}</p>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default MultipleChoiceSection;

// -----------------------

