// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./review.css";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// export default function Review() {
//   return (
//     <>
//     <div className="bg-success">
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         slidesPerGroup={3}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//       </div>
//     </>
//   );
// }
import React, { useRef, useState } from "react";
import SwiperCore, { Autoplay, Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./review.css";

// install Virtual module
SwiperCore.use([Autoplay, Virtual, Navigation, Pagination]);

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <div className="bg-danger col-12 col-lg-7">
        <Swiper
          slidesPerView={1}
        spaceBetween={30}
      slidesPerGroup={3}
        loop={true}
       loopFillGroupWithBlank={true}       
        pagination={{
         clickable: true,
        }}
       navigation={true}
        modules={[Pagination, Navigation]}
         className="mySwiper"
        >
          <SwiperSlide className="">
          <div className="row col-12 col-md-10 mx-auto">
            <div className="col-10 col-md-5 bg-success mx-auto">slide1</div>
            <div className="col-10 col-md-5 bg-danger mx-auto">slide1</div>
          </div>
          
          </SwiperSlide>
          <SwiperSlide className="bg-danger">Slide 2</SwiperSlide> 
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          {/* {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))} */}
        </Swiper>

        <p className="append-buttons">
          <button onClick={() => prepend()} className="prepend-2-slides">
            Prepend 2 Slides
          </button>
          <button onClick={() => slideTo(1)} className="prepend-slide">
            Slide 1
          </button>
          <button onClick={() => slideTo(250)} className="slide-250">
            Slide 250
          </button>
          <button onClick={() => slideTo(500)} className="slide-500">
            Slide 500
          </button>
          <button onClick={() => append()} className="append-slides">
            Append Slide
          </button>
        </p>
      </div>
    </>
  );
}
