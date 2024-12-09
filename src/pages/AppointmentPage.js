import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('/api/appointments', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setAppointments(response.data);
            } catch (error) {
                console.error("Lỗi khi lấy lịch hẹn", error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            <h1>Lịch hẹn của bạn</h1>
            {appointments.length === 0 ? (
                <p>Hiện tại bạn chưa có lịch hẹn nào.</p>
            ) : (
                <ul>
                    {appointments.map((appointment) => (
                        <li key={appointment._id}>
                            <p>Dịch vụ: {appointment.service}</p>
                            <p>Ngày: {new Date(appointment.date).toLocaleString()}</p>
                            <p>Trạng thái: {appointment.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AppointmentsPage;
