import React, { useState, useEffect } from "react";
import "../styles/ServicePage.css"; // Đảm bảo file CSS được tạo và liên kết đúng

const ServicePage = () => {
    const [services, setServices] = useState([]); // Dữ liệu dịch vụ
    const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Lỗi khi lấy dữ liệu

    const API_BASE_URL = process.env.REACT_APP_API_URL || "https://be-nmh.onrender.com";

    // Lấy danh sách dịch vụ từ backend
    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true); // Bắt đầu tải
                const response = await fetch(`${API_BASE_URL}/api/services/all`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    const errorMessage = await response.json();
                    throw new Error(errorMessage.message || "Không thể lấy danh sách dịch vụ.");
                }

                const data = await response.json();
                console.log("Dữ liệu dịch vụ nhận được:", data);

                // Kết hợp dịch vụ đã phê duyệt và dịch vụ đang chờ phê duyệt
                const allServices = [...data.services, ...data.pendingServices];
                setServices(allServices);
            } catch (err) {
                setError(err.message); // Lưu lỗi
            } finally {
                setLoading(false); // Hoàn tất tải
            }
        };

        fetchServices();
    }, [API_BASE_URL]);

    // Hiển thị trạng thái tải
    if (loading) {
        return <div className="loading">Đang tải danh sách dịch vụ...</div>;
    }

    // Hiển thị lỗi nếu có
    if (error) {
        return <div className="error">Lỗi: {error}</div>;
    }

    // Hiển thị tất cả dịch vụ trong một bảng
    return (
        <div className="service-page">
            <div className="content-wrapper">
                <h1>Danh Sách Dịch Vụ</h1>

                <table className="service-table">
                    <thead>
                    <tr>
                        <th>Tên Spa</th>
                        <th>Tên Dịch Vụ</th>
                        <th>Mô Tả</th>
                        <th>Giá (VND)</th>
                        <th>Trạng Thái</th>
                    </tr>
                    </thead>
                    <tbody>
                    {services.length > 0 ? (
                        services.map((service, index) => (
                            <tr key={index}>
                                <td>{service.spaName}</td>
                                <td>{service.name}</td>
                                <td>{service.description || "Không có mô tả"}</td>
                                <td>{service.price.toLocaleString()} VND</td>
                                <td>{service.status === "approved" ? "Đã phê duyệt" : "Đang chờ"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Không có dịch vụ nào để hiển thị.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServicePage;
