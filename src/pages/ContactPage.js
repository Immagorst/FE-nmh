import React, { useState } from "react";
import "./../styles/ContactPage.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState("");  // Lưu lỗi nếu có
    const [success, setSuccess] = useState(""); // Lưu thông báo thành công

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Gửi dữ liệu form đến API
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Chuyển đổi dữ liệu thành JSON
            });

            if (!response.ok) {
                // Nếu API trả về lỗi, hiển thị thông báo lỗi
                const message = await response.text();
                setError(message);
                setSuccess(""); // Reset success message
                return;
            }

            // Nếu gửi thành công
            const data = await response.json();
            setSuccess("Cảm ơn bạn đã liên hệ với chúng tôi!");
            setError(""); // Reset lỗi
            setFormData({ name: "", email: "", message: "" }); // Reset form
        } catch (err) {
            setError("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại!");
            setSuccess(""); // Reset success message
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-info">
                <h2>Thông Tin Liên Hệ</h2>
                <p><strong>Địa chỉ:</strong> P. Hàng Trống, Q. Hoàn Kiếm, TP. Hà Nội</p>
                <p><strong>Số điện thoại:</strong> 0584800177</p>
                <p><strong>Email:</strong> nmh31052005179@gmail.com</p>
            </div>

            <div className="contact-form">
                <h2>Gửi Tin Nhắn</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Họ Tên:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Tin Nhắn:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="bt">
                        <button type="submit">Gửi</button>
                    </div>
                </form>
                {error && <p className="error-message">{error}</p>} {/* Hiển thị lỗi nếu có */}
                {success && <p className="success-message">{success}</p>} {/* Hiển thị thông báo thành công */}
            </div>
        </div>
    );
};

export default ContactPage;
