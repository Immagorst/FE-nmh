import React, { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; // Thêm useNavigate
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
    const location = useLocation(); // Lấy đường dẫn hiện tại
    const navigate = useNavigate(); // Dùng để chuyển trang

    // Xử lý đăng xuất
    const handleLogout = () => {
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        navigate("/"); // Chuyển hướng về trang chủ
    };

    // Xử lý đăng nhập
    const handleLogin = () => {
        setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
        navigate("/"); // Chuyển hướng về trang chủ (hoặc trang khác tùy ý)
    };

    const pageClass = location.pathname.replace("/", "") || "home";

    return (
        <div className="app">
            {/* Truyền trạng thái và hàm xử lý logout vào Header */}
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <main className={`content ${pageClass}`}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route
                        path="/login"
                        element={<LoginPage onLogin={handleLogin} />}
                    />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </main>
            {/* Footer chỉ hiển thị khi không phải trang đăng nhập hoặc đăng ký */}
            {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
        </div>
    );
};

export default App;
