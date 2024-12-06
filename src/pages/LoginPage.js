import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/LoginRegister.css";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data: ", formData);
        // Giả lập đăng nhập thành công
        setTimeout(() => {
            alert("Đăng nhập thành công!");
            navigate("/"); // Điều hướng về trang chủ
        }, 500);
    };

    return (
        <div className="login-container">
            <div className="login">
                <h2>Đăng Nhập</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            required
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <button className="btn-submit" type="submit">
                        Đăng Nhập
                    </button>
                </form>
                <p>
                    Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
