import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>Min H Spa</h1>
                </div>
                <nav className="menu">
                    <Link to="/">Trang chủ</Link>
                    <Link to="/services">Dịch vụ</Link>
                    <Link to="/booking">Đặt lịch</Link>
                    <Link to="/contact">Liên hệ</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
