import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCard from './ProductCard/ProductCard.jsx';

import 'swiper/css';
import 'swiper/css/pagination';

import './PreviewSwiper.css';

const PreviewSwiper = ({ products }) => {
    return (
        <Swiper
            pagination={{clickable: true, dynamicBullets: true}}
            spaceBetween={16}
            slidesPerView={"auto"}
            modules={[Pagination]}
            breakpoints={{
                560: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
                1530: { slidesPerView: 5 }
            }}
            className="preview-swiper"
        >
            {products.map((product, index) => (
                <SwiperSlide key={index}>
                    <ProductCard product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PreviewSwiper;
