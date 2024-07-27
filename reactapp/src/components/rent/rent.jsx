import React, { useEffect } from 'react';
import card_1 from '../../img/photo-card-1.jpg';
import card_2 from '../../img/photo-card-2.jpg';
import card_3 from '../../img/photo-card-3.jpg';
import card_4 from '../../img/photo-card-4.jpg';
import card_5 from '../../img/photo-card-5.jpg';

export const Rent = () => {
    useEffect(() => {
        const gridButton = document.querySelector('.card-view-button-grid');
        const listButton = document.querySelector('.card-view-button-list');
        const cards = document.querySelector('.cards');

        const handleGridClick = () => {
            listButton.classList.remove('active');
            gridButton.classList.add('active');
            cards.classList.remove('list');
            cards.classList.add('grid');
        };

        const handleListClick = () => {
            gridButton.classList.remove('active');
            listButton.classList.add('active');
            cards.classList.remove('grid');
            cards.classList.add('list');
        };

        gridButton.addEventListener('click', handleGridClick);
        listButton.addEventListener('click', handleListClick);

        // Cleanup event listeners on component unmount
        return () => {
            gridButton.removeEventListener('click', handleGridClick);
            listButton.removeEventListener('click', handleListClick);
        };
    }, []);

    return (
        <section className="rent">
            <header>
                <h2>Аренда яхты</h2>
                <ul className="card-view-buttons">
                    <li className="card-view-item">
                        <button className="card-view-button-grid active" type="button"></button>
                    </li>
                    <li className="card-view-item">
                        <button className="card-view-button-list" type="button"></button>
                    </li>
                </ul>
            </header>
            <ul className="cards grid">
                <li className="card">
                    <img className="card-img" src={card_1} width="310" height="141" alt="Белая двухпалубная яхта"/>
                    <div className="card-content">
                        <h3 className="card-title">Катер Meridian 401</h3>
                        <p className="card-description">Яхта 401 длиной 12.5 метров и шириной 4.2 метра, вместимостью 11 человек</p>
                        <ul className="card-features">
                            <li>2 каюты</li>
                            <li>4 спальных места</li>
                            <li>аудиосистема, кондиционер</li>
                            <li>холодильник, микроволновка</li>
                            <li>душ, туалет</li>
                        </ul>
                    </div>
                    <p className="card-price">
                        <span className="card-price-name">Цена:</span>
                        <span className="card-price-value">14 000 ₽/час</span>
                    </p>
                </li>
                <li className="card">
                    <img className="card-img" src={card_2} width="310" height="141" alt="Белая двухпалубная яхта"/>
                    <div className="card-content">
                        <h3 className="card-title">Катер 60 Manhattan</h3>
                        <p className="card-description">Двухпалубное судно VIP уровня длиной 20 метров, вместимостью 10 человек</p>
                        <ul className="card-features">
                            <li>6 кают</li>
                            <li>носовая часть с огромной подушкой</li>
                            <li>просторный флайбридж</li>
                            <li>оборудованная кухня</li>
                            <li>джакузи</li>
                        </ul>
                    </div>
                    <p className="card-price">
                        <span className="card-price-name">Цена:</span>
                        <span className="card-price-value">25 000 ₽/час</span>
                    </p>
                </li>
                <li className="card">
                    <img className="card-img" src={card_3} width="310" height="141" alt="Белая яхта"/>
                    <div className="card-content">
                        <h3 className="card-title">Катер Starfisher 34</h3>
                        <p className="card-description">Моторная яхта длиной 11 метров и вместимостью до 8 человек</p>
                        <ul className="card-features">
                            <li>4 каюты</li>
                            <li>6 спальных мест</li>
                            <li>аудиосистема, кондиционер</li>
                            <li>холодильник, микроволновка</li>
                            <li>душ, туалет</li>
                        </ul>
                    </div>
                    <p className="card-price">
                        <span className="card-price-name">Цена:</span>
                        <span className="card-price-value">18 000 ₽/час</span>
                    </p>
                </li>
                <li className="card">
                    <img className="card-img" src={card_4} width="310" height="141" alt="Белый катер"/>
                    <div className="card-content">
                        <h3 className="card-title">Катер Pacific 7-13</h3>
                        <p className="card-description">Катер Pacific длиной 12 метров и шириной 4.6 метра, вместимостью 8 человек</p>
                        <ul className="card-features">
                            <li>1 каюта</li>
                            <li>2 спальных места</li>
                            <li>аудиосистема, кондиционер</li>
                            <li>холодильник, микроволновка</li>
                            <li>туалет</li>
                        </ul>
                    </div>
                    <p className="card-price">
                        <span className="card-price-name">Цена:</span>
                        <span className="card-price-value">11 000 ₽/час</span>
                    </p>
                </li>
                <li className="card">
                    <img className="card-img" src={card_5} width="310" height="141" alt="Белый катер"/>
                    <div className="card-content">
                        <h3 className="card-title">Катер Atlantic 3000</h3>
                        <p className="card-description">Катер Atlantic длиной 14 метров и вместимостью до 6 человек</p>
                        <ul className="card-features">
                            <li>2 каюты</li>
                            <li>4 спальных места</li>
                            <li>просторный флайбридж</li>
                            <li>оборудованная кухня</li>
                            <li>душ, туалет</li>
                        </ul>
                    </div>
                    <p className="card-price">
                        <span className="card-price-name">Цена:</span>
                        <span className="card-price-value">15 000 ₽/час</span>
                    </p>
                </li>
            </ul>
        </section>
    );
};