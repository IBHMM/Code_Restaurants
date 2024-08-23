import React from 'react';
import "./first.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const FirstSection = () => {
  return (
    <div className='section1__all'>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slide-content">
            <img style={{height:"800px"}} src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg" alt="" />
            <div className="overlay">
              <h2>Book a table for yourself at a time convenient for you</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img style={{height:"800px"}} src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg" alt="" />
            <div className="overlay">
              <h2>Tasty & Delicious Food</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img style={{height:"800px"}} src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg" alt="" />
            <div className="overlay">
            <h2>Book a table for yourself at a time convenient for you</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstSection;
