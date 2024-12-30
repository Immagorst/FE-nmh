import React from "react";

const BookingForm = ({
                         formData,
                         spaNames,
                         availableServices,
                         handleSpaChange,
                         handleServiceChange,
                         handleDateChange,
                         handleTimeChange,
                         handleEmailChange,
                         handleSubmit,
                         selectedPrice,
                         today,
                         loading,
                     }) => {
    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label>
                Tên Spa:
                <select value={formData.spa} onChange={handleSpaChange}>
                    <option value="">Chọn Spa</option>
                    {spaNames.map((spaName, index) => (
                        <option key={index} value={spaName}>
                            {spaName}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Dịch Vụ:
                <select value={formData.service} onChange={handleServiceChange}>
                    <option value="">Chọn dịch vụ</option>
                    {availableServices.map((service, index) => (
                        <option key={index} value={service.name}>
                            {service.name} - Giá: {service.price}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Giờ:
                <input type="time" value={formData.time} onChange={handleTimeChange} />
            </label>

            <label>
                Ngày:
                <input type="date" value={formData.date} min={today} onChange={handleDateChange} />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="Nhập email của bạn"
                />
            </label>

            <p>Giá: {selectedPrice || "Vui lòng chọn dịch vụ"}</p>

            <button type="submit" disabled={loading}>
                {loading ? "Đang đặt lịch..." : "Đặt lịch"}
            </button>
        </form>
    );
};

export default BookingForm;
