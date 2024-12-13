import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ isLoggedIn, onLogout }) => {
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
                        <Link to="/booking">Đặt lịch</Link>
                    </li>
                    <li>
                        <Link to="/about">Giới thiệu</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên hệ</Link>
                    </li>
                    {/* Hiển thị nút Đăng nhập/Đăng ký hoặc Đăng xuất */}
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/login">Đăng nhập</Link>
                            </li>
                            <li>
                                <Link to="/register">Đăng ký</Link>
                            </li>
                        </>
                    ) : (
                            <li>
                                <Link to="/" onClick={onLogout} className="logout-link">
                                    Đăng xuất
                                </Link>
                            </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
