import React, { useEffect, useState } from "react";
import "../styles/AppointmentPage.css";

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]); // State lưu danh sách lịch hẹn
    const [error, setError] = useState(""); // State lưu lỗi
    const [loading, setLoading] = useState(true); // State loading

    // Hàm lấy danh sách lịch hẹn từ backend
    const fetchAppointments = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/appointments", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Token từ localStorage
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Không thể lấy dữ liệu lịch hẹn.");
                return;
            }

            const data = await response.json();
            if (data && Array.isArray(data.appointments)) {
                setAppointments(data.appointments); // Cập nhật danh sách lịch hẹn
            } else {
                setError("Dữ liệu lịch hẹn không hợp lệ.");
            }
        } catch (err) {
            console.error("Lỗi khi tải lịch hẹn:", err);
            setError("Không thể kết nối tới máy chủ.");
        } finally {
            setLoading(false); // Kết thúc loading
        }
    };

    // Hàm xử lý xóa lịch hẹn
    const handleDeleteAppointment = async (appointmentId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/appointments/${appointmentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert("Xóa lịch hẹn thất bại: " + errorData.message);
                return;
            }

            alert("Xóa lịch hẹn thành công!");
            // Cập nhật danh sách lịch hẹn sau khi xóa
            setAppointments(appointments.filter((appt) => appt._id !== appointmentId));
        } catch (err) {
            console.error("Lỗi khi xóa lịch hẹn:", err);
            alert("Không thể kết nối tới máy chủ.");
        }
    };

    // Lấy danh sách lịch hẹn khi component được mount
    useEffect(() => {
        fetchAppointments();
    }, []);

    if (loading) {
        return <div>Đang tải danh sách lịch hẹn...</div>;
    }

    if (error) {
        return <div style={{ color: "red" }}>{error}</div>;
    }

    return (
        <div className="appointments-page">
            <h1>Danh Sách Lịch Hẹn</h1>
            {appointments.length === 0 ? (
                <p>Không có lịch hẹn nào.</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Spa</th>
                        <th>Dịch Vụ</th>
                        <th>Thời Gian</th>
                        <th>Ngày</th>
                        <th>Giá</th>
                        <th>Hành Động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={appointment._id}>
                            <td>{index + 1}</td>
                            <td>{appointment.spa}</td>
                            <td>{appointment.service}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.price}</td>
                            <td>
                                <button
                                    onClick={() => handleDeleteAppointment(appointment._id)}
                                    style={{ color: "red" }}
                                    className="delete-button"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AppointmentsPage;
