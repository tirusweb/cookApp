import React from 'react';
import { useState } from 'react';
import styles from './Home.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';
import { Tab, Tabs } from 'react-bootstrap';
import Toggles from './Toggle';
import { Button } from 'react-bootstrap';
import bundau from '+/image/bundau2.jpg';
import about1 from '+/image/about1.jpg';
import about2 from '+/image/about-2.jpg';
import about3 from '+/image/about-3.jpg';
import about4 from '+/image/about-4.jpg';

const cx = classNames.bind(styles);

function Home() {
    const [key, setKey] = useState('profile');
    const fakeApiInformations = [
        {
            id: 1,
            icon: 'fa-solid fa-user',
            title: 'Master Chefs',
            description:
                'Our restaurant always recruits top chefs who are both dynamic and experienced and have undergone special training courses',
        },
        {
            id: 2,
            icon: 'fa-solid fa-utensils',
            title: 'Quality Food',
            description:
                'The variety of dishes is suitable for all ages and meets all ages of customers and always listens to customers requests.',
        },
        {
            id: 3,
            icon: 'fa-solid fa-cart-shopping',
            title: 'Online Order',
            description:
                'Supports online ordering and delivery and all dishes are available on shopeeFood and Grapfood applications and other digital platforms',
        },
        {
            id: 4,
            icon: 'fa-solid fa-headphones',
            title: '24/7 Service',
            description: 'All customer inquiries are received and customer support staff is available 24/7',
        },
    ];

    return (
        <div className={cx('wraper')}>
            <div className={cx('home')}>
                <div className={cx('home-content')}>
                    <div className={cx('content-left')}>
                        <div className={cx('content-info')}>
                            <h2 className={cx('content-title')}>Every Day A Delicious Dish</h2>
                            <p className={cx('content-desc')}>
                                There are always delicious foods around you, enjoy them with your loved ones. Your
                                happiness is our cherished motivation
                            </p>
                            <p className={cx('content-desc', 'author')}>-------Tirus-------</p>
                            <Button variant="outline-info" className={cx('button-header')}>
                                <span className={cx('label')}>BOOK A TABLE</span>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('content-right')}>
                        <img className={cx('content-img')} src={bundau} />
                    </div>
                </div>
                {/* ---SEVICE */}
                <div className={cx('home-sevice')}>
                    <div className={cx('carts')}>
                        {fakeApiInformations.map((sevice, index) => (
                            <div key={index} className={cx('cart-list')}>
                                <div className={cx('cart-item')}>
                                    <i className={cx(sevice.icon, 'cart-icon')}></i>
                                    <h2 className={cx('cart-header')}>{sevice.title}</h2>
                                    <p className={cx('cart-desc')}>{sevice.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ABOUT */}
                <div className={cx('home-about')}>
                    <div className={cx('about')}>
                        <div className={cx('about-content')}>
                            <div className={cx('content-image')}>
                                <div className={cx('images-top')}>
                                    <div className={cx('img-topleft')}>
                                        <img className={cx('about-img1')} src={about1} />
                                    </div>
                                    <div className={cx('img-topright')}>
                                        <img className={cx('about-img2')} src={about2} />
                                    </div>
                                </div>
                                <div className={cx('images-bot')}>
                                    <div className={cx('img-botleft')}>
                                        <img className={cx('about-img3')} src={about3} />
                                    </div>
                                    <div className={cx('img-botright')}>
                                        <img className={cx('about-img4')} src={about4} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('content-infor')}>
                                <div className={cx('informations')}>
                                    <p className={cx('about-title')}>About us</p>
                                    <div className={cx('about-header-logo')}>
                                        <h2 className={cx('about-heading')}>Welcome to</h2>
                                        <i className={cx('fa-solid fa-bowl-rice', 'about-icon-logo')}></i>
                                        <h2 className={cx('about-label-logo')}>CookTwoH</h2>
                                    </div>
                                    <p className={cx('about-desc')}>
                                        Welcome to our restaurant where you can experience it most comfortably and enjoy
                                        it the way you want.{' '}
                                    </p>
                                    <p className={cx('about-desc')}>
                                        Our restaurant is committed and has food safety certifications and has a team of
                                        trained staff who always understand customers, ensuring customer service when
                                        needed and enthusiastic support for customers to have a good experience. the
                                        best
                                    </p>
                                    <div className={cx('about-marter')}>
                                        <div className={cx('quality')}>
                                            <h2 className={cx('about-year')}>15</h2>
                                            <div className={cx('about-year-infor')}>
                                                <p className={cx('year-infor-of-title')}>Years of</p>
                                                <p className={cx('year-infor-of')}>EXPERIENCE</p>
                                            </div>
                                        </div>
                                        <div className={cx('quality', 'h2')}>
                                            <h2 className={cx('about-year')}>50</h2>
                                            <div className={cx('about-year-infor')}>
                                                <p className={cx('year-infor-of-title')}>Popular</p>
                                                <p className={cx('year-infor-of')}>MASTER CHEFS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="outline-info" className={cx('about-button-header')}>
                                    <span className={cx('about-btn-label')}>READ MORE</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Food Menu */}
                <div className={cx('home-food')}>
                    <div className={cx('food-menu')}>
                        <p className={cx('menu-infor')}>-------- Food Menu --------</p>
                        <p className={cx('menu-infor')}>Most Popular Item</p>
                        <div className={cx('menu-tab')}>
                            <div className={cx('menu-tab-list')}>
                               <Toggles/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
