import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Dùng để điều hướng
import "../styles/LoginRegister.css";

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate(); // Hook để điều hướng

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Giả lập kiểm tra thông tin đăng nhập, mày kết nối api vào để xác nhận mấy cái tài khoản thật
        if (email === "test@example.com" && password === "123456") {
            onLogin(); // Gọi hàm cập nhật trạng thái đăng nhập
            navigate("/"); // Chuyển hướng về trang chủ
        } else {
            alert("Email hoặc mật khẩu không đúng!");
        }
    };

    return (
        <div className="page-container">
            <div className="login-register-container">
                <h1>Đăng Nhập</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="password-container">
                        <label>Mật khẩu:</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? "Ẩn" : "Hiện"}
                        </span>
                    </div>
                    <button type="submit">Đăng Nhập</button>
                </form>
                <div className="form-footer">
                    <p>
                        Chưa có tài khoản? <a href="/register">Đăng ký</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
