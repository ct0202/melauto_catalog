import { useState, useEffect } from 'react';

import Product from './components/Product.jsx'

import './styles.css'

import data from './mock/products.json';



const Catalog = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     setProducts(data);
    // }, []);

    useEffect(() => {
        fetch("https://api.melavto.com/get")
            .then(response => response.json())
            .then(data => setProducts(data['universities']))
            .catch(error => console.error("Ошибка загрузки данных:", error));
    }, []);

    console.log(products);

    return (
        <>
            <div>
                <div className="catalog">
                    {products.map(product => (
                        <Product key={product._id} product={product}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Catalog;