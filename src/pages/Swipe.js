import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles
import 'swiper/css';
import Image1 from './../assets/login.jpg';
import Image2 from './../assets/land.jpg';
import Image3 from './../assets/land3.jpg';

export default function Swipe() {
  return (

    <>

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="swiper-fixed-width-400"
        modules={[Autoplay, Pagination, Navigation]}
      >

        <SwiperSlide><img src={Image1} className="img" alt="image1"></img></SwiperSlide>
        <SwiperSlide><img src={Image2}  className="img" alt="image2"></img></SwiperSlide>
        <SwiperSlide><img src={Image3}  className="img" alt="image3"></img></SwiperSlide>
      </Swiper>
   
    </>
  )
}