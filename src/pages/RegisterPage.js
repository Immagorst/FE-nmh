import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/LoginRegister.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register Data: ", formData);
        // Giả lập đăng ký thành công
        setTimeout(() => {
            alert("Đăng ký thành công!");
            navigate("/login"); // Điều hướng về trang đăng nhập
        }, 500);
    };

    return (
        <div className="login-container">
            <div className="login">
                <h2>Đăng Ký</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Họ và Tên"
                            required
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
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
                        Đăng Ký
                    </button>
                </form>
                <p>
                    Bạn đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
