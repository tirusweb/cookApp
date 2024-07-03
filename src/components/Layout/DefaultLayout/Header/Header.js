import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const cx = classNames.bind(styles);


function Header() {

    //const token = localStorage.getItem('assetToken')

    const [activeLink, setActiveLink] = useState(() => {
        return localStorage.getItem('activeLink') || "/";
    });

    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem('activeLink', link);
    }; 
    return (
        <div className={cx('layout')}>
            <div className={cx('layout-header')}>
                <div className={cx('header-logo')}>
                    <Link to="/" className={cx('logo-link')}>
                        <i className={cx('fa-solid fa-bowl-rice' , 'icon-logo')}></i>
                        <h2 className={cx('label-logo')}>CookTwoH</h2>
                    </Link>
                </div>
                <div className={cx('header-content')}>
                    <Link className={cx('item', { 'active': activeLink === "/" })} to="/" onClick={() => handleLinkClick('/')}>
                        <span className={cx('label')}>HOME</span>
                    </Link>
                    <Link className={cx('item', { 'active': activeLink === "/about" })} to="/about" onClick={() => handleLinkClick('/about')}>
                        <span className={cx('label')}>ABOUT</span>
                    </Link>
                    <Link className={cx('item', { 'active': activeLink === "/service" })} to="/service" onClick={() => handleLinkClick('/service')}>
                        <span className={cx('label')}>SERVICE</span>
                    </Link>
                    <Link  className={cx('item', { 'active': activeLink === "/page" })} to="/page" onClick={() => handleLinkClick('/page')}>
                        <span className={cx('label')}>PAGES</span>
                    </Link>
                    <Link className={cx('item', { 'active': activeLink === "/contact" })} to="/contact" onClick={() => handleLinkClick('/contact')}>
                        <span className={cx('label')}>CONTACT</span>
                    </Link>
                    <Button variant="outline-info" className={cx('item' , 'button-header')}>
                        <span className={cx('label')}>BOOK A TABLE</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
