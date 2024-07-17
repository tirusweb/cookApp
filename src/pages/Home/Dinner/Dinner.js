import React from 'react';
import styles from '../TabcontenBre/Tabconten1.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Dinner() {

    const fakeAPIDinner = [
        {
            id: 1,
            image: 'https://themewagon.github.io/restoran/img/menu-1.jpg',
            name: 'Chicken Burger',
            Description: 'KFC fried chicken is made from industrial chicken',
            price: '500.000VND',
        },
        {
            id: 2,
            image: 'https://themewagon.github.io/restoran/img/menu-3.jpg',
            name: 'Pizza Egg Burger',
            Description: 'Its a delicious and nutritious dish for the morning',
            price: '500.000VND',
        },
        {
            id: 3,
            image: 'https://themewagon.github.io/restoran/img/menu-5.jpg',
            name: 'Buffet Breakfast ',
            Description: 'consists of many dishes combined together',
            price: '500.000VND',
        },
        {
            id: 4,
            image: 'https://themewagon.github.io/restoran/img/menu-7.jpg',
            name: 'Seafood Pizza',
            Description: 'This dish is suitable for children',
            price: '500.000VND',
        },
        {
            id: 5,
            image: 'https://themewagon.github.io/restoran/img/menu-2.jpg',
            name: 'Seafood Shrimp Noodles',
            Description: 'is a quick and very popular breakfast dish',
            price: '500.000VND',
        },
        {
            id: 6,
            image: 'https://themewagon.github.io/restoran/img/menu-4.jpg',
            name: 'Steak',
            Description: 'delicious and nutritious food',
            price: '500.000VND',
        },
        {
            id: 7,
            image: 'https://themewagon.github.io/restoran/img/menu-6.jpg',
            name: 'Fried Beef Balls',
            Description: 'The dish is fragrant, crunchy, chewy and delicious',
            price: '500.000VND',
        },
        {
            id: 8,
            image: 'https://themewagon.github.io/restoran/img/menu-8.jpg',
            name: 'grilled beef',
            Description: 'fertilize with spicy food and catch your mouth',
            price: '600.000VND',
        },
        {
            id: 9,
            image: 'https://themewagon.github.io/restoran/img/menu-6.jpg',
            name: 'Fried Beef Balls',
            Description: 'The dish is fragrant, crunchy, chewy and delicious',
            price: '500.000VND',
        },
        {
            id: 10,
            image: 'https://themewagon.github.io/restoran/img/menu-8.jpg',
            name: 'grilled beef',
            Description: 'fertilize with spicy food and catch your mouth',
            price: '600.000VND',
        },
    ];

    return ( 
        <div className={cx('tabconten_menu')}>
            <div className={cx('flex')}>
                {fakeAPIDinner.map((Breakfat, index) => (
                    <div className={cx('food-menu')} key={Breakfat.id}>
                        <div className={cx('food-menu_detail')}>
                            <img className={cx('food-menu_img')} src={Breakfat.image} />
                            <div className={cx('food-menu_infor')}>
                                <div className={cx('food-menu_title')}>
                                    <p className={cx('food-menu_name')}>{Breakfat.name}</p>
                                    <p className={cx('food-menu_price')}>{Breakfat.price}</p>
                                </div>
                                <p className={cx('food-menu_desc')}>{Breakfat.Description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Dinner;