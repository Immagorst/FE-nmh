import React, { useState } from "react";
import "../styles/loginregister.css"; // Đảm bảo đường dẫn chính xác

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-register-container">
            <h1>Đăng Nhập</h1>
            <form>
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
                <button type="submit">Đăng Nhập</button>
            </form>
            <div className="form-footer">
                <p>Chưa có tài khoản? <a href="/register">Đăng ký</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
