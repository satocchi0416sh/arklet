import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {

    return (
        <>
            <header>
                <Link to={"/"}><h1>ARKLET</h1></Link>
                <nav className="gnav">
                    <ul className="menu">
                        <li><Link to={"/company"}>会社概要</Link></li>
                        <li><Link to={"/recruit"}>採用情報</Link></li>
                        <li><Link to={"/about"}>お問い合わせ</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="menu-icon">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
        </>
    )
}

export default Header
