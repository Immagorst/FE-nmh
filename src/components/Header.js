import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="/LAVIE-removebg-logo.png" alt="LAVIE Logo" className="logo-img" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/services">Dịch vụ</Link>
                    </li>
                    <li>
                        <Link to="/booking">Đặt Lịch</Link>
                    </li>
                    <li>
                        <Link to="/about">Giới thiệu</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên hệ</Link>
                    </li>
                    <li>
                        <Link to="/login">Đăng Nhập</Link>
                    </li>
                    <li>
                        <Link to="/register">Đăng Kí</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
