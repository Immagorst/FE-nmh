import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginRegister from "./pages/LoginRegister";
import BookingPage from "./pages/BookingPage";
import AppointmentPage from "./pages/AppointmentPage";
import ManageServices from "./pages/ManageServices";
import ManageAppointments from "./pages/ManageAppointments";
import AdminLayout from "./components/AdminLayout";
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
    const [userRole, setUserRole] = useState(""); // Vai trò của người dùng (admin hoặc customer)
    const navigate = useNavigate();

    // Hàm xử lý đăng nhập
    const handleLogin = (role) => {
        setIsLoggedIn(true);
        setUserRole(role);

        // Điều hướng dựa trên vai trò người dùng
        if (role === "admin") {
            navigate("/admin"); // Điều hướng đến Admin Dashboard
        } else {
            navigate("/"); // Điều hướng đến HomePage
        }
    };

    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserRole("");
        localStorage.removeItem("token"); // Xóa token trong localStorage
        navigate("/"); // Điều hướng về HomePage
    };

    // Kiểm tra nếu người dùng đã đăng nhập bằng token
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                const userRoleFromToken = payload.role;
                setIsLoggedIn(true);
                setUserRole(userRoleFromToken);
            } catch (error) {
                console.error("Token không hợp lệ:", error);
                handleLogout();
            }
        }
    }, [navigate]);

    const AdminRoute = ({ children }) => {
        if (!isLoggedIn || userRole !== "admin") {
            return <Navigate to="/" replace />;
        }
        return children;
    };


    return (
        <div className="app">
            <Header isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />

            <main className="content">
                <Routes>
                    {/* Các trang khách hàng */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/appointments" element={<AppointmentPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route
                        path="/loginregister"
                        element={<LoginRegister onLogin={handleLogin} />}
                    />
                    <Route path="/booking" element={<BookingPage />} />

                    {/* Các trang admin */}
                    <Route
                        path="/admin"
                        element={
                            <AdminRoute>
                                <AdminLayout />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/manage-appointments"
                        element={<ManageAppointments />}
                    />
                    <Route path="/manage-services" element={<ManageServices />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
