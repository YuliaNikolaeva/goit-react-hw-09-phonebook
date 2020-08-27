import React from 'react';
import s from './HomePage.module.css';

const HomePage = () => (
    <div className={s.imgBox}>
        <img 
            src="https://www.kcbgraphics.com/image/cache/catalog/3115-welcome-geometric-blue-outdoor-vinyl-banner-LRG-600x315w.jpg"
            alt="wellcome"
            className={s.imgWellcome}
            >
        </img>
    </div>
);


export default HomePage;