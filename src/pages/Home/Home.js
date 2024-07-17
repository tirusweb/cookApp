import React from 'react';
import { useState } from 'react';
import styles from './Home.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import TabPanel from './TabPanel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import bundau from '+/image/bundau2.jpg';
import about1 from '+/image/about1.jpg';
import about2 from '+/image/about-2.jpg';
import about3 from '+/image/about-3.jpg';
import about4 from '+/image/about-4.jpg';

// menu import
import Tabcontent1 from './TabcontenBre/Tabconten1';
import Launch from './TabcontenLunc/Lunch';
import Dinner from './Dinner/Dinner';
import Hometeam  from './Hometeam/Hometeam';
import Feedback from './Feedback/Feedback';

const cx = classNames.bind(styles);

function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [key, setKey] = useState('profile'); // Tab mặc định là 'profile'
    // const [value, setValue] = React.useState('1');
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
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

    // select number people bool a table
    const currencies = [
        {
            id: 1,
            label: 'People 1',
        },
        {
            id: 2,
            label: 'People 2',
        },
        {
            id: 3,
            label: 'People 3',
        },
        {
            id: 4,
            label: 'People 4',
        },
        {
            id: 5,
            label: 'People 5',
        },
        {
            id: 6,
            label: 'People 6',
        },
        {
            id: 7,
            label: 'People > 6',
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
                        <p className={cx('menu-desc')}>Most Popular Item</p>
                        <div className={cx('menu-tab')}>
                            <div className={cx('menu-tab-lists')}>
                                <Box className={cx('menu-box')}>
                                    <Tabs
                                        indicatorColor="secondary"
                                        sx={{ borderBottom: '2px solid #cccccc' }}
                                        className={cx('menu-tab-list')}
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="tabs example"
                                    >
                                        <Tab
                                            className={cx('menu-tab-item')}
                                            label="Breakfast "
                                            icon={<LocalCafeIcon className={cx('menu-icon')} />}
                                            iconPosition="start"
                                        >
                                            <div style={{ marginLeft: 8 }}>Thẻ con của Tab 1</div>
                                        </Tab>
                                        <Tab
                                            className={cx('menu-tab-item')}
                                            label="Launch"
                                            icon={<LunchDiningIcon className={cx('menu-icon')} />}
                                            iconPosition="start"
                                        >
                                            <div style={{ marginLeft: 8 }}>Thẻ con của Tab 2</div>
                                        </Tab>
                                        <Tab
                                            className={cx('menu-tab-item')}
                                            label="Dinner"
                                            icon={<RestaurantIcon className={cx('menu-icon')} />}
                                            iconPosition="start"
                                        >
                                            <div style={{ marginLeft: 8 }}>Thẻ con của Tab 3</div>
                                        </Tab>
                                    </Tabs>
                                    <TabPanel className={cx('content-menu')} value={value} index={0}>
                                        <Tabcontent1 className={cx('tab-content-menu')} />
                                    </TabPanel>
                                    <TabPanel className={cx('content-menu')} value={value} index={1}>
                                        <Launch className={cx('tab-content-menu')} />
                                    </TabPanel>
                                    <TabPanel className={cx('content-menu')} value={value} index={2}>
                                        <Dinner className={cx('tab-content-menu')} />
                                    </TabPanel>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Infor Custommer */}

                <div className={cx('home-custommer')}>
                    <div className={cx('customer-infor')}>
                        <div className={cx('cus-infor-video')}>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/DdRTZaW7Prk?si=GE0x9qlvtZmw1tD_"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className={cx('customer-infor_page')}>
                            <div className={cx('customer-infor-res')}>
                                <p className={cx('infor-reservation')}>Reservation </p>
                                <p className={cx('infor-book-table')}>Book A Table Online</p>
                                <div className={cx('customer-infor-input')}>
                                    <TextField
                                        className={cx('customer-input-type')}
                                        id="outlined-basic"
                                        label="Your Name"
                                        variant="outlined"
                                    />
                                    <TextField
                                        className={cx('customer-input-type', 'customer-input-right')}
                                        id="outlined-basic"
                                        label="Your Email"
                                        variant="outlined"
                                    />
                                </div>
                                <div className={cx('customer-infor-input')}>
                                    <input
                                        className={cx('customer-infor-date', 'customer-input-left')}
                                        type="datetime-local"
                                    />
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="No Of People"
                                        defaultValue="People 1"
                                        className={cx('customer-infor-date', 'customer-input-right')}
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.id} value={option.label}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <textarea className={cx('customer-textarea')} placeholder="Note...."></textarea>
                                <Button variant="outline-info" className={cx('cus-button')}>
                                    <span className={cx('label')}>BOOK A TABLE</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Marter Cheft */}   
                <div className={cx('home-team')}>
                    <Hometeam/>
                </div>

                <div className={cx('customer-feedback')}>
                    <Feedback/>
                </div>
            </div>
        </div>
    );
}

export default Home;
