import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import WorkFlowTimeline from "./components/Timeline/Timeline.jsx";
import PreviewSwiper from "./components/PreviewSwiper/PreviewSwiper.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

import slider_img1 from "../../assets/images/slider_img_1.jpg";
import slider_img2 from "../../assets/images/slider_img_2.jpg";
import slider_img3 from "../../assets/images/slider_img_3.jpg";

import advantages_delivery from "../../assets/icons/advantages_delivery.svg"
import advantages_check from "../../assets/icons/advantages_check.svg"
import advantages_quality from "../../assets/icons/advantages_quality.svg"

import services_insurance from "../../assets/icons/services_insurance.svg"
import services_sale from "../../assets/icons/services_sale.svg"
import services_trade from "../../assets/icons/services_trade.svg"

import catalog_preview_1 from "../../assets/images/catalog_preview_1.png";
import catalog_preview_2 from "../../assets/images/catalog_preview_2.png";
import catalog_preview_3 from "../../assets/images/catalog_preview_3.png";
import catalog_preview_4 from "../../assets/images/catalog_preview_4.png";
import catalog_preview_5 from "../../assets/images/catalog_preview_5.png";

import review_img_1 from "../../assets/images/review_avatar_1.png"
import review_img_2 from "../../assets/images/review_avatar_2.png"
import review_img_3 from "../../assets/images/review_avatar_3.png"


import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

import data from './mock/products.json';
import {useEffect, useState} from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.melavto.com/get")
            .then(response => response.json())
            .then(data => setProducts(data['universities']))
            .catch(error => console.error("Ошибка загрузки данных:", error));
    }, []);


    return (
        <>
            <div id='home'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}

                    modules={[Pagination, Autoplay]}

                    className="swiper"
                >
                    <SwiperSlide>
                        <img className="swiper-slide-img" src={slider_img2} alt="slider1"/>
                        <div className="content">
                            <div className="title">
                                Mazda 770 LX
                            </div>
                            <div className="subtitle">
                                6 000 000 $
                            </div>
                            <a href="#contacts">
                            <button className="slide-button">
                                FIND MY CAR
                            </button>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="swiper-slide-img" src={slider_img3} alt="slider1"/>
                        <div className="content">
                            <div className="title">
                                Genesis Ultra 400
                            </div>
                            <div className="subtitle">
                                700 000 $
                            </div>
                            <a href="#contacts">
                                <button className="slide-button">
                                    FIND MY CAR
                                </button>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="advantage">
                <div className="card">
                    <object type="image/svg+xml" width="70px" data={advantages_delivery}></object>
                    <p><b>TURNKEY DELIVERY</b></p>
                    <p>We handle the entire process, from order placement to final delivery. You receive the
                        ready-to-use result with no hassle.</p>
                </div>
                <div className="card">
                    <object type="image/svg+xml" width="70px" data={advantages_check}></object>
                    <p><b>PRE-PURCHASE CAR INSPECTION</b></p>
                    <p>We conduct a full vehicle check before you buy to ensure transparency and reliability. No hidden
                        issues, just peace of mind.</p>
                </div>
                <div className="card">
                    <object type="image/svg+xml" width="70px" data={advantages_quality}></object>
                    <p><b>QUALITY GUARANTEE</b></p>
                    <p>We ensure that every product meets the highest standards. You can trust that your purchase is
                        reliable and built to last.</p>
                </div>
            </div>
            {/*<div className="catalog-preview">*/}
            {/*    <p className="catalog-preview-title">CATALOG <button className="view-all-button">VIEW ALL</button></p>*/}
            {/*    <Swiper*/}
            {/*        slidesPerView={3}*/}
            {/*        spaceBetween={0}*/}
            {/*        freeMode={true}*/}
            {/*        pagination={{*/}
            {/*            clickable: true,*/}
            {/*        }}*/}
            {/*        modules={[FreeMode, Pagination]}*/}
            {/*        breakpoints={{*/}
            {/*            1170: {*/}
            {/*                slidesPerView: 3,*/}
            {/*            },*/}
            {/*            768: {*/}
            {/*                slidesPerView: 2,*/}
            {/*            },*/}
            {/*            300: {*/}
            {/*                slidesPerView: 1,*/}
            {/*            }*/}
            {/*        }}*/}
            {/*        className="swiper-catalog-preview"*/}
            {/*    >*/}
            {/*        <SwiperSlide>*/}
            {/*            <img src={catalog_preview_4}/>*/}
            {/*            <p>Car 1</p>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <img src={catalog_preview_5}/>*/}
            {/*            <p>Car 1</p>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <img src={catalog_preview_4}/>*/}
            {/*            <p>Car 1</p>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <img src={catalog_preview_4}/>*/}
            {/*            <p>Car 1</p>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <img src={catalog_preview_5}/>*/}
            {/*            <p>Car 1</p>*/}
            {/*        </SwiperSlide>*/}
            {/*    </Swiper>*/}
            {/*</div>*/}
            <div className="preview-catalog">
                <p className="catalog-preview-title">CATALOG <button className="view-all-button">VIEW ALL</button></p>
                <PreviewSwiper products={products} />
            </div>
            <div className="services" id = 'services'>
                <h1 style={{color: 'white'}}>OUR SERVICES</h1>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="70px" data={services_insurance}></object>
                        <p>CAR SALES</p>
                    </div>
                    <div className="service-description">A wide selection of high-quality new and used cars to suit every budget and preference.
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-description">Get the best value for your current vehicle when upgrading to a new one.
                    </div>
                    <div>
                        <object type="image/svg+xml" width="70px" data={services_sale}></object>
                        <p>TRADE-IN</p>
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="70px" data={services_trade}></object>
                        <p>INSURANCE</p>
                    </div>
                    <div className="service-description">Helping you find the right coverage for peace of mind on the road.
                    </div>
                </div>
            </div>
            <div className="workflow" id = 'workflow'>
                <h1 className="workflow-title">WORKFLOW</h1>
                <div className="workflow-content">
                    <WorkFlowTimeline/>
                </div>
            </div>
            <div className="reviews" id="reviews">
                <h1 className="reviews-title">REVIEWS</h1>
                <div className="reviews-list">
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_1} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">October 26, 2024</p>
                                <p className="review-card-author-name">Leonard Fischer</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">I had a great experience with MELAUTO. Their team provided exceptional customer service and made sure I was completely satisfied with my purchase. The car was exactly as described, in excellent condition, and the pricing was fair with no hidden fees. If you're looking for a trustworthy dealership, this is the place to go!</p>
                    </div>
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_2} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">June 15, 2023</p>
                                <p className="review-card-author-name">Emir Yıldız</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">I recently purchased a car from MELAUTO, and the experience was fantastic! The staff was friendly, knowledgeable, and patient, answering all my questions and helping me choose the perfect car. The entire process, from selection to financing, was smooth and hassle-free. Highly recommended for anyone looking for a reliable vehicle and great service!</p>
                    </div>
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_3} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">December 25, 2024</p>
                                <p className="review-card-author-name">Zofia Nowak</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">I was impressed with the wide range of cars available at MELAUTO. The team guided me through every step, from test driving to paperwork, making everything quick and easy. I drove away with my dream car the same day! Definitely recommend them to anyone looking for a stress-free car buying experience. </p>
                    </div>
                </div>
            </div>
            <div className='form-container' id="contacts">
                <h1 style={{fontWeight: '300'}}>CONTACT US</h1>
                <ContactForm />
            </div>
            <div className='footer' id='socials'>
                <h2 style={{fontWeight: '300'}}>
                    SOCIALS
                </h2>
                <div className='footer-icons-container'>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <LinkedIn />
                </div>
            </div>
        </>
    );
}

export default Home;