import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function DarkVariantExample() {
    const fakeAPICusFeedback = [
        {
            id: 1,
            idea: 'The restaurant is spacious, clean, delicious food and enthusiastic staff',
            name: 'Trung Hieu Nguyen',
            img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            id: 2,
            idea: 'The restaurant is spacious, clean, delicious food and enthusiastic staff',
            name: 'Trung Kien Pino',
            img: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        },
        {
            id: 3,
            idea: 'The restaurant is spacious, clean, delicious food and enthusiastic staff',
            name: 'Hương Thảo',
            img: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            id: 4,
            idea: 'The restaurant is spacious, clean, delicious food and enthusiastic staff',
            name: 'Hong Tran',
            img: 'https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            id: 5,
            idea: 'The restaurant is spacious, clean, delicious food and enthusiastic staff',
            name: 'Mixi Gaming',
            img: 'https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const handlePrev = () => {
        setDirection('prev');
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? fakeAPICusFeedback.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection('next');
        setActiveIndex((prevIndex) =>
            prevIndex === fakeAPICusFeedback.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={cx('container')}>
            <p className={cx('card-title')}>__Team Member__</p>
            <p className={cx('card-title-chefs')}>Our Master Chefs</p>
            <div id="carouselExample" className={cx('carousel')}>
                <div className={cx('carousel-inner')}>
                    {fakeAPICusFeedback.map((feedback, index) => (
                        <div
                            key={feedback.id}
                            className={cx('carousel-item', {
                                active: index === activeIndex,
                                prev: direction === 'prev' && index === (activeIndex + 1) % fakeAPICusFeedback.length,
                                next: direction === 'next' && index === (activeIndex - 1 + fakeAPICusFeedback.length) % fakeAPICusFeedback.length,
                            })}
                        >
                            <div className={cx('testimonial-card')}>
                                <p className={cx('feedidea')}>{feedback.idea}</p>
                                <div className={cx('client-info')}>
                                    <img
                                        src={feedback.img}
                                        alt={feedback.name}
                                        className={cx('client-photo')}
                                    />
                                    <div>
                                        <p className={cx('client-name')}>{feedback.name}</p>
                                        <p className={cx('client-profession')}>Profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={cx('custom-control-prev')} onClick={handlePrev}>
                    <i className={cx('fas fa-chevron-left')}></i>
                </button>
                <button className={cx('custom-control-next')} onClick={handleNext}>
                    <i className={cx('fas fa-chevron-right')}></i>
                </button>
            </div>
        </div>
    );
}

export default DarkVariantExample;
