import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ManageAppointments.css";

const ManageAppointments = () => {
    const [appointments, setAppointments] = useState([]);


    // Fetch appointments khi component mount
    useEffect(() => {
        fetchAppointments();
    }, []);

    // Hàm fetch danh sách lịch hẹn
    const fetchAppointments = async () => {
        try {
            const response = await fetch(`https://web-full-stack-3.onrender.com/api/appointments`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json(); // Nếu có thông báo lỗi từ API
                throw new Error(errorData.message || "Không thể lấy danh sách lịch hẹn.");
            }

            const data = await response.json();
            setAppointments(data.appointments);
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        }
    };

    // Hàm xác nhận lịch hẹn
    const handleApproveAppointment = async (id) => {
        try {
            const response = await fetch(`https://web-full-stack-3.onrender.com/api/appointments/approve/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Không thể xác nhận lịch hẹn.");
            }

            // Lấy lại danh sách lịch hẹn sau khi xác nhận thành công
            fetchAppointments();
            toast.success("Lịch hẹn đã được xác nhận.", { position: "top-right" });
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        }
    };

    return (
        <div>
            <ToastContainer />
            <h2>Quản Lý Lịch Hẹn</h2>
            <table>
                <thead>
                <tr>
                    <th>Tên Spa</th>
                    <th>Dịch Vụ</th>
                    <th>Thời Gian</th>
                    <th>Ngày</th>
                    <th>Giá</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {appointments.length === 0 ? (
                    <tr>
                        <td colSpan="7" style={{ textAlign: "center" }}>
                            Không có lịch hẹn nào.
                        </td>
                    </tr>
                ) : (
                    appointments.map((appointment) => (
                        <tr key={appointment._id}>
                            <td>{appointment.spa}</td>
                            <td>{appointment.service}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.price}</td>
                            <td>{appointment.status}</td>
                            <td>
                                {appointment.status === "pending" && (
                                    <button
                                        onClick={() => handleApproveAppointment(appointment._id)}
                                    >
                                        Xác Nhận
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAppointments;
