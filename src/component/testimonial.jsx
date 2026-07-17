// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// const TestimonialSection = () => {
//   const testimonials = [
//     {
//       name: "Umiya Bags",
//       text: "Akshar Consultancy has been very supportive in managing our accounts and taxation.",
//     },
//     {
//       name: "Devang Steel Corporation",
//       text: "Professional GST and tax support. Highly reliable consultancy services.",
//     },
//     {
//       name: "Yogiraj Parlour",
//       text: "Simplified financial work and ensured compliance. Highly recommended.",
//     },
//     {
//       name: "Shree Enterprise",
//       text: "Best accounting and tax planning services with timely response.",
//     },
//     {
//       name: "Matru Creation",
//       text: "Excellent consultancy service with proper guidance in financial and tax planning.",
//     },
//   ];

//   return (
//     <section className="relative py-16 md:py-24 bg-black text-white">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
//           className="w-full h-full object-cover opacity-30"
//           alt="bg"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <h4 className="text-[#F5B800] uppercase tracking-widest mb-3">
//           Testimonials
//         </h4>

//         <h2 className="text-2xl md:text-4xl font-bold mb-12">
//           What Clients Say About Akshar Consultancy
//         </h2>

//         {/* Swiper Carousel */}
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {testimonials.map((item, i) => (
//             <SwiperSlide key={i}>
//               <div className="bg-white text-gray-700 p-6 md:p-8 rounded-xl shadow-lg h-full flex flex-col justify-between hover:-translate-y-2 transition duration-300">
//                 <p className="text-sm leading-relaxed mb-6">“{item.text}”</p>

//                 <div className="border-t pt-4">
//                   <h4 className="font-semibold text-[#0B2A4A] text-lg">
//                     {item.name}
//                   </h4>
//                   <p className="text-xs text-gray-500">Valued Client</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// const TestimonialSection = () => {
//   const testimonials = [
//     {
//       name: "Umiya Bags",
//       text: "Akshar Consultancy has been very supportive in managing our accounts and taxation.",
//     },
//     {
//       name: "Devang Steel Corporation",
//       text: "Professional GST and tax support. Highly reliable consultancy services.",
//     },
//     {
//       name: "Yogiraj Parlour",
//       text: "Simplified financial work and ensured compliance. Highly recommended.",
//     },
//     {
//       name: "Shree Enterprise",
//       text: "Best accounting and tax planning services with timely response.",
//     },
//     {
//       name: "Matru Creation",
//       text: "Excellent consultancy service with proper guidance in financial and tax planning.",
//     },
//   ];

//   return (
//     <section className="relative py-16 md:py-24 bg-black text-white overflow-hidden">
//       {/* 🔥 BLUR BACKGROUND */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
//           className="w-full h-full object-cover opacity-40 scale-110 blur-md"
//           alt="bg"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <h4 className="text-[#F5B800] uppercase tracking-widest mb-3">
//           Testimonials
//         </h4>

//         <h2 className="text-2xl md:text-4xl font-bold mb-12">
//           What Clients Say About Akshar Consultancy
//         </h2>

//         {/* 🔥 SWIPER */}
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={25}
//           slidesPerView={1}
//           loop={true}
//           speed={1200} // 👉 slow smooth slide
//           autoplay={{
//             delay: 4500, // 👉 slow autoplay
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {testimonials.map((item, i) => (
//             <SwiperSlide key={i}>
//               <div
//                 className="bg-white/90 backdrop-blur-md text-gray-700 p-6 md:p-8 rounded-xl shadow-xl h-full flex flex-col justify-between
//               hover:-translate-y-2 hover:shadow-2xl transition duration-500"
//               >
//                 <p className="text-sm leading-relaxed mb-6">“{item.text}”</p>

//                 <div className="border-t pt-4">
//                   <h4 className="font-semibold text-[#0B2A4A] text-lg">
//                     {item.name}
//                   </h4>
//                   <p className="text-xs text-gray-500">Valued Client</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Umiya Bags",
      text: "Akshar Consultancy has been very supportive in managing our accounts and taxation.",
    },
    {
      name: "Devang Steel Corporation",
      text: "Professional GST and tax support. Highly reliable consultancy services.",
    },
    {
      name: "Yogiraj Parlour",
      text: "Simplified financial work and ensured compliance. Highly recommended.",
    },
    {
      name: "Shree Enterprise",
      text: "Best accounting and tax planning services with timely response.",
    },
    {
      name: "Matru Creation",
      text: "Excellent consultancy service with proper guidance in financial and tax planning.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>

      {/* 🔥 BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h4 className="text-[#F5B800] uppercase tracking-widest mb-3">
          Testimonials
        </h4>

        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          What Clients Say About Akshar Consultancy
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              {/* 🔥 TRANSPARENT CARD */}
              <div
                className="p-6 md:p-8 h-full flex flex-col justify-between 
              border border-white/20 rounded-xl 
              hover:-translate-y-2 transition duration-500"
              >
                <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-200">
                  “{item.text}”
                </p>

                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold text-white text-lg">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">Valued Client</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
