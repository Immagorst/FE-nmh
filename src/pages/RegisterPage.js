import React, { useState } from "react";
import "../styles/LoginRegister.css"; // Đảm bảo đường dẫn chính xác

const RegisterPage = () => {
    const [name, setName] = useState(""); // Lưu họ tên
    const [email, setEmail] = useState(""); // Lưu email
    const [password, setPassword] = useState(""); // Lưu mật khẩu
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState(""); // Lưu lỗi từ server (nếu có)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Xử lý khi form được submit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngừng reload trang khi submit form

        // Gửi request đến backend để đăng ký
        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }), // Gửi dữ liệu đăng ký
            });

            if (!response.ok) {
                const message = await response.text(); // Lấy thông báo lỗi từ server
                setError(message); // Hiển thị lỗi
                return;
            }

            const data = await response.json(); // Lấy phản hồi từ server
            // Chuyển hướng hoặc hiển thị thông báo thành công
            console.log("Đăng ký thành công:", data);
            // Bạn có thể chuyển hướng về trang đăng nhập hoặc trang chủ sau khi đăng ký thành công
        } catch (err) {
            setError("Lỗi kết nối, vui lòng thử lại!"); // Lỗi kết nối server
        }
    };

    return (
        <div className="page-container">
            <div className="login-register-container">
                <h1>Đăng Ký</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Họ và tên:</label>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Cập nhật giá trị
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị
                            required
                        />
                    </div>
                    <div className="password-container">
                        <label>Mật khẩu:</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? "Ẩn" : "Hiện"}
                        </span>
                    </div>
                    <button type="submit">Đăng Ký</button>
                </form>
                {error && <p className="error-message">{error}</p>} {/* Hiển thị lỗi nếu có */}
                <div className="form-footer">
                    <p>Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
