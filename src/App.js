import React, { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; // Thêm useNavigate
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginRegister from "./pages/LoginRegister";
import BookingPage from "./pages/BookingPage";
import AppointmentsPage from "./pages/AppointmentPage";
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
    const location = useLocation(); // Lấy đường dẫn hiện tại
    const navigate = useNavigate(); // Dùng để chuyển trang

    // Xử lý đăng xuất
    const handleLogout = () => {
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        localStorage.removeItem("token"); // Xóa token (nếu có dùng token)
        navigate("/loginregister"); // Chuyển hướng về trang đăng nhập
    };

    // Xử lý đăng nhập
    const handleLogin = () => {
        setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
        navigate("/"); // Chuyển hướng về trang chủ (hoặc trang khác tùy ý)
    };

    // Hàm bảo vệ truy cập vào các trang cần đăng nhập
    const PrivateRoute = ({ element }) => {
        if (!isLoggedIn) {
            // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
            alert("Bạn cần đăng nhập để truy cập trang này.");
            return navigate("/loginregister");
        }
        return element;
    };

    const pageClass = location.pathname.replace("/", "") || "home";

    return (
        <div className="app">
            {/* Truyền trạng thái và hàm xử lý logout vào Header */}
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <main className={`content ${pageClass}`}>
                <Routes>
                    {/* Trang công khai */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route
                        path="/contact"
                        element={<PrivateRoute element={<ContactPage />} />}
                    />
                    {/* Trang yêu cầu đăng nhập */}
                    <Route
                        path="/services"
                        element={<PrivateRoute element={<ServicesPage />} />}
                    />
                    <Route
                        path="/booking"
                        element={<PrivateRoute element={<BookingPage />} />}
                    />
                    <Route path="/appointments" element={<AppointmentsPage />} />
                    {/* Trang đăng nhập/đăng ký */}
                    <Route
                        path="/loginregister"
                        element={<LoginRegister onLogin={handleLogin} />}
                    />
                </Routes>
            </main>
            {/* Footer chỉ hiển thị khi không phải trang đăng nhập hoặc đăng ký */}
            {location.pathname !== "/loginregister" && <Footer />}
        </div>
    );
};

export default App;
