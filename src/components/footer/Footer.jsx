import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='footer-contents'>
                <div>
                    <h1>ARKLET</h1>
                </div>
                <div>
                    <a href="">会社概要</a>
                    <a href="">採用情報</a>
                    <a href="">お問い合せ</a>
                </div>
            </div>
            <div className='footer-copy'>
                <p>Copyright © 2022 ARKLET</p>
            </div>
        </footer>
    );
};

export default Footer;
