import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannerOne from '../../assets/banner_1.png'
import bannerTwo from '../../assets/banner_2.png'


const SwiperImage = () => {
    return (
        <Swiper className="swiper-image"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            speed={5000}
            style={{ width: '100%' }}
        >
            <SwiperSlide className='swiper-slide'>
                <a href="#">
                    <img src={bannerOne} width="1140" height="450" className="swiper-image__img" alt="Слайд 1"/>
                </a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <a href="#">
                    <img src={bannerTwo} width="1140" height="450" className="swiper-image__img" alt="Слайд 1"/>
                </a>
            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperImage;