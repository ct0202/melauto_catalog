import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './productCardPreview.css'

const Product = ({ product }) => {
    return (
        <>
            <div className="product-card-preview">
                <div className="image-container">
                    <Swiper
                        pagination={{clickable: true, dynamicBullets: true}}
                        modules={[Pagination]}
                        className="swiper-container"
                    >
                        {product.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`${product.name} ${index + 1}`} className="product-image"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="product-info">
                    <p className="product-price">{product.price} $</p>
                    <p className="product-name">{product.name}</p>
                    <p className="product-description">{product.description.join(' · ')}</p>
                </div>
            </div>
        </>
    );
}

export default Product;