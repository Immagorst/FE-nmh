import React, { useState } from "react";
import "./../styles/BookingForm.css";

const BookingPage = () => {
    const [formData, setFormData] = useState({ name: "", service: "", date: "", time: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic gửi dữ liệu đặt lịch
        console.log("Booking Form Data: ", formData);
    };

    return (
        <>
            <div className="booking-form">
                <h2>Đặt Lịch Dịch Vụ</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Tên bạn"
                            required
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Dịch vụ"
                            required
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            required
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="time"
                            required
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        />
                    </div>
                    <button type="submit">Đặt lịch</button>
                </form>
            </div>
        </>
    );
};

export default BookingPage;
