import React from "react";

const BookingForm = ({
    formData,
    setFormData,
    spaData,
    availableServices,
    availableTimes,
    handleSpaChange,
    handleServiceChange,
    handleSubmit,
    selectedPrice,
    handleDateChange,
    today,
}) => {
    return (
        <div className="background">
        <div className="booking-form">
            <form onSubmit={handleSubmit}>
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
