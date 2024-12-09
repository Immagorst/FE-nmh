import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Không cần import BrowserRouter nữa
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage"
const App = () => {
    const location = useLocation(); // Hook useLocation() để lấy đường dẫn hiện tại

    return (
        <div className="app">
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </main>

            {/* Chỉ hiển thị Footer khi không phải trang đăng nhập hoặc đăng ký */}
            {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
        </div>
    );
};

export default App;
