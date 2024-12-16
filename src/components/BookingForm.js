import React from "react";

const BookingForm = ({
                         formData,
                         setFormData,
                         spaData,
                         availableServices,
                         availableTimes,
                         handleSpaChange,
                         handleServiceChange,
                         selectedPrice,
                         handleDateChange,
                         today,
                     }) => {
    // Hàm gửi yêu cầu đặt lịch tới backend
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token"); // Lấy token từ localStorage
        if (!token) {
            alert("Không có token, vui lòng đăng nhập.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Gửi token trong header
                },
                body: JSON.stringify({
                    spa: formData.spa,
                    service: formData.service,
                    time: formData.time,
                    date: formData.date,
                    price: selectedPrice,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert("Đặt lịch thất bại: " + errorData.message);
                return;
            }

            const result = await response.json();
            alert("Đặt lịch thành công! ID lịch hẹn của bạn: " + result.bookingId);
        } catch (err) {
            console.error("Lỗi kết nối tới server:", err);
            alert("Không thể kết nối tới máy chủ.");
        }
    };

    return (
        <div className="background">
            <div className="booking-form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="spa">Chọn Spa:</label>
                        <select
                            id="spa"
                            value={formData.spa}
                            onChange={handleSpaChange}
                        >
                            <option value="">--Chọn Spa--</option>
                            {Object.keys(spaData).map((spaName) => (
                                <option key={spaName} value={spaName}>
                                    {spaName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="service">Chọn Dịch Vụ:</label>
                        <select
                            id="service"
                            value={formData.service}
                            onChange={handleServiceChange}
                        >
                            <option value="">--Chọn Dịch Vụ--</option>
                            {availableServices.map((serviceName) => (
                                <option key={serviceName} value={serviceName}>
                                    {serviceName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="time">Chọn Thời Gian:</label>
                        <select
                            id="time"
                            value={formData.time}
                            onChange={(e) =>
                                setFormData({ ...formData, time: e.target.value })
                            }
                        >
                            <option value="">--Chọn Thời Gian--</option>
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date">Chọn Ngày:</label>
                        <input
                            type="date"
                            id="date"
                            value={formData.date}
                            onChange={handleDateChange}
                            min={today} // Chặn chọn ngày trước ngày hôm nay
                        />
                    </div>

                    <div>
                        <label htmlFor="price">Giá Dịch Vụ:</label>
                        <input
                            type="text"
                            id="price"
                            value={selectedPrice}
                            readOnly
                        />
                    </div>

                    <button type="submit">Đặt Lịch</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
