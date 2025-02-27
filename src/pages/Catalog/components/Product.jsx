import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './product.css'

import Modal from 'react-modal';
import {useEffect, useState} from "react";

const Product = ({ product }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        Modal.setAppElement('#root');  // Указываем корневой элемент
    }, []);

    const openModal = (imgUrl) => {
        setSelectedImage(imgUrl);
        setModalIsOpen(true);
    };

    return (
        <>
            <div className="product-card">
                <div className="image-container">
                    <Swiper
                        pagination={{clickable: true, dynamicBullets: true}}
                        modules={[Pagination]}
                        className="swiper-container"
                    >
                        {product.imageUrls.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img.url} alt={`${product.name} ${index + 1}`} className="product-image" onClick={() => openModal(img.url)}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="product-info">
                    <p className="product-price">{product.price.toLocaleString()} $</p>
                    <p className="product-name">{product.brand.toUpperCase()} {product.model.toUpperCase()} {product.year}</p>
                    <p className="product-description">Mileage {product.mileage} · {product.fuelType} · {product.condition}</p>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="modal"
                appElement={document.getElementById('root')}
                overlayClassName="overlay"
            >
                <button onClick={() => setModalIsOpen(false)} className="close-button">✖</button>
                {selectedImage && <img src={selectedImage} alt="Enlarged product" className="modal-image" />}
            </Modal>
        </>
    );
}

export default Product;