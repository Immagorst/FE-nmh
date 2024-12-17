import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import "./../styles/BookingForm.css";

const BookingPage = () => {
    const spaData = {
        "De L’Amour Spa": {
            services: {
                "REFRESH SKIN ": {
                    price: "100K",
                    times: ["09:00", "10:00", "14:00"],
                },
                "Thải Chì Môi": {
                    price: "100K",
                    times: ["11:00", "13:00", "15:00"],
                },
                "Thải Chì Da Mặt ": {
                    price: "180K",
                    times: ["10:00", "12:00", "16:00"],
                },
                "Gói COLLAGEN ": {
                    price: "180K",
                    times: ["09:00", "11:00", "14:00"],
                },
                "Trị Mụn ": {
                    price: "280K",
                    times: ["10:00", "12:00", "16:00"],
                },
                "Ủ Trắng Da Mặt ": {
                    price: "230K",
                    times: ["09:00", "11:00", "14:00"],
                },
                "Trị Thâm ": {
                    price: "280K",
                    times: ["09:00", "12:00", "15:00"],
                },
            },
        },
        "La Vie En Rose Beauty & Spa": {
            services: {
                "Tiêm truyền nuôi da: Tiêm cocktail 5TBG": {
                    price: "500K",
                    times: ["10:00", "12:00", "16:00"],
                },
                "Tiêm Radiance 10TBG": {
                    price: "500K",
                    times: ["11:00", "13:00", "15:00"],
                },
                "Tiêm TBG điều trị nám": {
                    price: "450K",
                    times: ["10:00", "14:00", "16:00"],
                },
                "Tiêm filler Juvederm": {
                    price: "800K",
                    times: ["09:00", "11:00", "14:00"],
                },
                "Tiêm botox": {
                    price: "700K",
                    times: ["10:00", "12:00", "14:00"],
                },
                "Nhấn mí CN Laser": {
                    price: "650K",
                    times: ["09:00", "11:00", "13:00"],
                },
                "Giảm béo CNC": {
                    price: "600K",
                    times: ["10:00", "12:00", "14:00"],
                },
                "Tắm dưỡng trắng body TCTN": {
                    price: "500K",
                    times: ["09:00", "11:00", "13:00"],
                },
                "Triệt lông vĩnh viễn công nghệ cao": {
                    price: "700K",
                    times: ["10:00", "12:00", "16:00"],
                },
            },
        },
        "Sorella Beauty Spa": {
            services: {
                "Liệu trình chăm sóc sắc đẹp chuyên nghiệp": {
                    price: "350K",
                    times: ["09:00", "11:00", "14:00"],
                },
                "Chăm sóc da mặt bằng tinh chất vitamin C ": {
                    price: "250K",
                    times: ["10:00", "12:00", "16:00"],
                },
                "Phục hồi tóc hư tổn ": {
                    price: "300K",
                    times: ["09:00", "11:00", "14:00"],
                },
            },
        },
        "Thiên Hà Spa": {
            services: {
                "Massage thư giãn toàn thân ": {
                    price: "180K",
                    times: ["09:00", "11:00", "14:00"],
                },
                "Điều trị mụn chuyên sâu ": {
                    price: "350K",
                    times: ["10:00", "12:00", "16:00"],
                },
                "Dịch vụ chăm sóc da mặt và trị liệu cao cấp": {
                    price: "400K",
                    times: ["09:00", "11:00", "13:00"],
                },
            },
        },
        "Perla Spa Hà Nội": {
            services: {
                "Massage thư giãn, trị liệu da": {
                    price: "200K",
                    times: ["09:00", "10:00", "14:00"],
                },
                "Chăm sóc da mặt chuyên sâu ": {
                    price: "250K",
                    times: ["11:00", "13:00", "15:00"],
                },
                "Tắm trắng toàn thân ": {
                    price: "500K",
                    times: ["10:00", "12:00", "14:00"],
                },
                "Nail Care": {
                    price: "150K",
                    times: ["09:30", "11:30", "14:30"],
                },
            },
        },
        "Shi Beauty & Spa": {
            services: {
                "Chăm sóc sắc đẹp với liệu trình thiên nhiên": {
                    price: "350K",
                    times: ["09:00", "10:00", "14:00"],
                },
                "Điều trị thâm quầng mắt ": {
                    price: "200K",
                    times: ["11:00", "13:00", "15:00"],
                },
                "Trẻ hóa da bằng công nghệ ánh sáng ": {
                    price: "400K",
                    times: ["10:00", "12:00", "14:00"],
                },
                "Massage thư giãn": {
                    price: "200K",
                    times: ["09:00", "11:00", "14:00"],
                },
            },
        },
        "Anam QT Spa": {
            services: {
                "Liệu trình chăm sóc da mặt cao cấp ": {
                    price: "500K",
                    times: ["10:00", "12:00", "16:00"],
                },
                "Massage thư giãn toàn thân 200K": {
                    price: "200K",
                    times: ["09:00", "11:00", "14:00"],
                },
                "Facial": {
                    price: "300K",
                    times: ["10:00", "12:00", "14:00"],
                },
                "Haircut": {
                    price: "150K",
                    times: ["09:00", "11:00", "13:00"],
                },
            },
        },
    };

    const [formData, setFormData] = useState({
        spa: "",
        service: "",
        time: "",
        date: "",
        price: "",
    });

    const [availableServices, setAvailableServices] = useState([]);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState("");

    const handleSpaChange = (e) => {
        const selectedSpa = e.target.value;
        setFormData({ ...formData, spa: selectedSpa, service: "", time: "", date: "" });
        setSelectedPrice(""); // Reset giá khi đổi spa
        if (selectedSpa) {
            setAvailableServices(Object.keys(spaData[selectedSpa].services));
            setAvailableTimes([]);
        } else {
            setAvailableServices([]);
            setAvailableTimes([]);
        }
    };

    const handleServiceChange = (e) => {
        const selectedService = e.target.value;
        setFormData({ ...formData, service: selectedService, time: "", date: "" });
        if (formData.spa && selectedService) {
            setAvailableTimes(spaData[formData.spa].services[selectedService].times);
            setSelectedPrice(spaData[formData.spa].services[selectedService].price); // Set giá khi chọn dịch vụ
        } else {
            setAvailableTimes([]);
            setSelectedPrice("");
        }
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setFormData({ ...formData, date: selectedDate });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra nếu tất cả trường đã được điền đầy đủ
        if (!formData.spa || !formData.service || !formData.time || !formData.date) {
            alert("Vui lòng chọn đầy đủ các trường!");
            return;
        }

        try {
            const token = localStorage.getItem("token"); // Lấy token từ localStorage
            if (!token) {
                alert("Bạn cần đăng nhập để thực hiện hành động này.");
                return;
            }
            const response = await fetch("https://beserver123.onrender.com/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData), // Chuyển dữ liệu form thành JSON
            });

            if (!response.ok) {
                const message = await response.text();
                alert("Có lỗi xảy ra: " + message);
                return;
            }

            // Nếu gửi thành công
            const result = await response.json();
            alert("Đặt lịch thành công! Mã đặt lịch: " + result.bookingId);

            // Reset form
            setFormData({
                spa: "",
                service: "",
                time: "",
                date: "",
                price: "",
            });

        } catch (err) {
            console.error("Lỗi khi gửi yêu cầu:", err);
            alert("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.");
        }
    };


    // Lấy ngày hôm nay để chặn ngày quá khứ
    const today = new Date().toISOString().split("T")[0];

    return (
        <BookingForm
            formData={formData}
            setFormData={setFormData}
            spaData={spaData}
            availableServices={availableServices}
            availableTimes={availableTimes}
            handleSpaChange={handleSpaChange}
            handleServiceChange={handleServiceChange}
            handleSubmit={handleSubmit}
            selectedPrice={selectedPrice}
            handleDateChange={handleDateChange}
            today={today} // Truyền ngày hôm nay để chặn chọn quá khứ
        />
    );
};

export default BookingPage;
