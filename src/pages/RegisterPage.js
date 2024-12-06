import React, { useState } from "react";
import "../styles/LoginRegister.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic xử lý đăng ký
        console.log("Register Form Data: ", formData);
    };

    return (
        <div className="login">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <input
                        type="text"
                        placeholder="Họ và Tên"
                        required
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
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
                    Đăng Ký
                </button>
            </form>
            <div className="query">
                <p>
                    Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
