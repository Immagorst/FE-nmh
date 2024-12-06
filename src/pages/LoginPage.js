import React, { useState } from "react";
import "../styles/LoginRegister.css";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic xử lý đăng nhập
        console.log("Login Form Data: ", formData);
    };

    return (
        <div className="login">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="box">
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        required
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <button className="btnLogin" type="submit">
                    Đăng Nhập
                </button>
            </form>
            <div className="query">
                <p>
                    Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
