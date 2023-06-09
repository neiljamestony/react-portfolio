import { testimonials } from '../app/data';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);

export default function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='testimonials-title'>TESTIMONIALS</div>
      <div className='testimonials-content'>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          loop
        >
          {testimonials.map((data, key) => {
            return (
              <SwiperSlide key={key}>
                <div className='testimonial-item'>
                  <div className='testimonial-item-sub-content'>
                    <div className='testimonial-header-container'>
                      <img
                        className='testimonial-img'
                        src={data.icon}
                        alt='alt-img'
                        height={100}
                      />
                    </div>
                    <div className='testimonial-name'>{data.name}</div>
                    <div className='testimonial-header-container'>
                      <div className='tech'>{data.pstn}</div>
                    </div>
                    <div className='feedback'>
                      <p>{`"${data.fb}"`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
