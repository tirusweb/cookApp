import React from 'react';
import styles from './Hometeam.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';
import { Description, Instagram, LinkedIn } from '@mui/icons-material';

const cx = classNames.bind(styles);

function Hometeam() {
    const fakeAPIMasterChef = [
        {
            id: 1,
            img: 'https://themewagon.github.io/restoran/img/team-1.jpg',
            name: 'Jason Wang',
            Description: '10 years of experience',
            facebook: 'https://www.facebook.com/',
            LinkedIn: 'https://www.linkedin.com/',
            Instagram: 'https://www.instagram.com/',
        },
        {
            id: 2,
            img: 'https://themewagon.github.io/restoran/img/team-2.jpg',
            name: 'Trason Dagger',
            Description: '8 years of experience',
            facebook: 'https://www.facebook.com/',
            LinkedIn: 'https://www.linkedin.com/',
            Instagram: 'https://www.instagram.com/',
        },
        {
            id: 3,
            img: 'https://themewagon.github.io/restoran/img/team-4.jpg',
            name: 'Full Name',
            Description: '12 years of experience',
            facebook: 'https://www.facebook.com/',
            LinkedIn: 'https://www.linkedin.com/',
            Instagram: 'https://www.instagram.com/',
        },
        {
            id: 4,
            img: 'https://themewagon.github.io/restoran/img/team-3.jpg',
            name: 'Trung Hiếu',
            Description: '2 years of experience',
            facebook: 'https://www.facebook.com/',
            LinkedIn: 'https://www.linkedin.com/',
            Instagram: 'https://www.instagram.com/',
        },
    ];
    return (
        <div className={cx('team-card')}>

            <p className={cx('card-title')}>__FeedBack__</p>
            <p className={cx('card-title-chefs')}>Our Clients Say!!!</p>
            <div className={cx('team-card-people')}>
                {fakeAPIMasterChef.map((member, index) => (
                    <div key={member.id} className={cx('card-marter')}>
                        <div className={cx('member-card-img')}>
                            <img className={cx('card-img')} src={member.img} />
                        </div>
                        <p className={cx('card-name')}>{member.name}</p>
                        <p className={cx('card-desc')}>{member.Description}</p>
                        <div className={cx('card-contact')}>
                            <a href={member.facebook} className={cx('card-link')}>
                                <i className={cx('fa-brands fa-facebook')}></i>
                            </a>
                            <a href={member.Instagram} className={cx('card-link')}>
                                <i className={cx('fa-brands fa-instagram')}></i>
                            </a>
                            <a href={member.LinkedIn} className={cx('card-link')}>
                                <i className={cx('fa-brands fa-linkedin')}></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hometeam;
