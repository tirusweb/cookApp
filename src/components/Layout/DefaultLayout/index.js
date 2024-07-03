import Header from './Header/Header';
import React from 'react';
import style from './defaultLayout.module.scss'
import classNames from 'classnames';


const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('default')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
