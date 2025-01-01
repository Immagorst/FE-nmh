import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/AdminLayout.css"; // Style riêng cho admin layout

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <nav className="admin-nav">
                <Link to="/admin/manage-services">Quản Lý Dịch Vụ</Link>
                {/* Link đến trang xác nhận dịch vụ với id động */}
                <Link to="/admin/approve-service">Xác nhận dịch vụ</Link>
                <Link to="/admin/manage-appointments">Quản Lý Lịch Hẹn</Link>
            </nav>
            <div className="admin-content">
                <Outlet /> {/* Render các route con */}
            </div>
        </div>
    );
};

export default AdminLayout;
