import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ isLoggedIn, userRole, onLogout }) => {
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
                    {/* Các liên kết khách hàng */}
                    {isLoggedIn && userRole !== "admin" && (
                        <>
                            <li>
                                <Link to="/booking">Đặt lịch</Link>
                            </li>
                            <li>
                                <Link to="/appointments">Xem lịch hẹn</Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to="/about">Giới thiệu</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên hệ</Link>
                    </li>

                    {/* Các liên kết admin */}
                    {isLoggedIn && userRole === "admin" && (
                        <>
                            <li>
                                <Link to="/manage-services">Quản lý dịch vụ</Link>
                            </li>
                            <li>
                                <Link to="/manage-appointments">Quản lý lịch hẹn</Link>
                            </li>
                        </>
                    )}

                    {/* Hiển thị nút Đăng nhập/Đăng xuất */}
                    {!isLoggedIn ? (
                        <li>
                            <Link to="/loginregister">Đăng Nhập/Đăng Kí</Link>
                        </li>
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
