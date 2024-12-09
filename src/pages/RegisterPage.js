import React, { useState } from "react";
import "../styles/loginregister.css"; // Đảm bảo đường dẫn chính xác

const RegisterPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-register-container">
            <h1>Đăng Ký</h1>
            <form>
                <div>
                    <label>Họ và tên:</label>
                    <input type="text" placeholder="Nhập họ và tên" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Nhập email" required />
                </div>
                <div className="password-container">
                    <label>Mật khẩu:</label>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Nhập mật khẩu"
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
            <div className="form-footer">
                <p>Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;
