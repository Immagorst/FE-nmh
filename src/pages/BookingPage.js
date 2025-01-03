import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { ToastContainer, toast } from "react-toastify";  // Import ToastContainer và toast
import "react-toastify/dist/ReactToastify.css";  // Import CSS cho Toastify
import "./../styles/BookingForm.css";

const API_BASE_URL = "https://be-nmh.onrender.com";  // API base URL

const BookingPage = () => {
    const [formData, setFormData] = useState({
        spa: "",
        service: "",
        time: "",
        date: "",
        price: "",
        email: "",
    });

    const [spaData, setSpaData] = useState([]); // Dữ liệu dịch vụ từ backend
    const [spaNames, setSpaNames] = useState([]); // Danh sách tên Spa duy nhất
    const [availableServices, setAvailableServices] = useState([]); // Danh sách dịch vụ của Spa đã chọn
    const [selectedPrice, setSelectedPrice] = useState(""); // Giá dịch vụ được chọn
    const [loading, setLoading] = useState(false);

    // Lấy danh sách Spa và dịch vụ từ backend
    useEffect(() => {
        const fetchSpaData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/services/all`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (!response.ok) throw new Error("Không thể lấy danh sách dịch vụ.");
                const data = await response.json();
                setSpaData(data.services);
                // Lọc danh sách tên Spa duy nhất
                const uniqueSpaNames = [...new Set(data.services.map((service) => service.spaName))];
                setSpaNames(uniqueSpaNames);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách Spa:", error.message);
                toast.error("Lỗi khi lấy dữ liệu Spa!", { position: "top-right" }); // Hiển thị thông báo lỗi
            }
        };
        fetchSpaData();
    }, [API_BASE_URL]);

    // Xử lý thay đổi Spa
    const handleSpaChange = (e) => {
        const selectedSpa = e.target.value;
        setFormData({ ...formData, spa: selectedSpa, service: "", time: "", date: "" });
        setSelectedPrice("");
        if (selectedSpa) {
            const filteredServices = spaData.filter((service) => service.spaName === selectedSpa);
            setAvailableServices(filteredServices); // Lưu danh sách dịch vụ của Spa được chọn
        } else {
            setAvailableServices([]);
        }
    };

    // Xử lý thay đổi Dịch vụ
    const handleServiceChange = (e) => {
        const selectedServiceName = e.target.value;
        const selectedService = availableServices.find((service) => service.name === selectedServiceName);

        setFormData({
            ...formData,
            service: selectedServiceName,
            price: selectedService ? selectedService.price : "",
        });

        setSelectedPrice(selectedService ? selectedService.price : "");
    };

    // Xử lý thay đổi ngày, giờ, email
    const handleDateChange = (e) => setFormData({ ...formData, date: e.target.value });
    const handleTimeChange = (e) => setFormData({ ...formData, time: e.target.value });
    const handleEmailChange = (e) => setFormData({ ...formData, email: e.target.value });

    // Xử lý gửi form
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra nếu các trường đã được điền đầy đủ
        if (!formData.spa || !formData.service || !formData.time || !formData.date || !formData.email) {
            toast.error("Vui lòng chọn đầy đủ thông tin!", { position: "top-right" });  // Thông báo lỗi
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/api/appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error("Lỗi: " + errorData.message, { position: "top-right" });  // Thông báo lỗi
                return;
            }

            // Nếu thành công
            const result = await response.json();
            toast.success("Đặt lịch thành công! Vui lòng kiểm tra email để nhận thông báo.", { position: "top-right" });  // Thông báo thành công
            setFormData({
                spa: "",
                service: "",
                time: "",
                date: "",
                price: "",
                email: "",
            });
        } catch (error) {
            console.error("Lỗi khi đặt lịch:", error);
            toast.error("Có lỗi xảy ra, vui lòng thử lại sau.", { position: "top-right" });  // Thông báo lỗi
        } finally {
            setLoading(false);
        }
    };

    // Lấy ngày hôm nay để chặn chọn ngày quá khứ
    const today = new Date().toISOString().split("T")[0];

    return (
        <div>
            <ToastContainer />  {/* Đặt container Toastify tại đây */}
            <BookingForm
                formData={formData}
                spaNames={spaNames}
                availableServices={availableServices}
                handleSpaChange={handleSpaChange}
                handleServiceChange={handleServiceChange}
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                handleEmailChange={handleEmailChange}
                handleSubmit={handleSubmit}
                selectedPrice={selectedPrice}
                today={today}
                loading={loading}
            />
        </div>
    );
};

export default BookingPage;
