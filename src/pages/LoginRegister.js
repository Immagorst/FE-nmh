import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginRegister.css";

const LoginRegister = ({ onLogin }) => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://web-full-stack-3.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Đăng nhập thất bại");
                return;
            }

            const data = await response.json();
            const token = data.token;

            if (token) {
                localStorage.setItem("token", token);
                onLogin();
                navigate("/"); // Chuyển hướng đến trang chủ
            } else {
                setError("Đăng nhập thành công nhưng không nhận được token.");
            }
        } catch (err) {
            setError("Không thể kết nối đến máy chủ.");
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://web-full-stack-3.onrender.com/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    password: password.trim(),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Đăng ký thất bại");
                return;
            }

            setError("");
            alert("Đăng ký thành công! Vui lòng đăng nhập.");
            setIsSignUpActive(false);
        } catch (err) {
            setError("Không thể kết nối đến máy chủ.");
        }
    };

    return (
        <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
            {/* Form Đăng ký */}
            <div className="form-container sign-up-container">
                <form onSubmit={handleRegisterSubmit} className="form-style">
                    <h1>Đăng Ký</h1>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Họ và tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="form-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-container">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            className="form-input"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={togglePasswordVisibility}>
                            {passwordVisible ? "Ẩn" : "Hiện"}
                        </span>
                    </div>
                    <button className="sign-up-button" type="submit">
                        Đăng Ký
                    </button>
                </form>
            </div>

            {/* Form Đăng nhập */}
            <div className="form-container sign-in-container">
                <form onSubmit={handleLoginSubmit} className="form-style">
                    <h1 className="login-h1">Đăng Nhập</h1>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-container">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            className="form-input"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={togglePasswordVisibility}>
                            {passwordVisible ? "Ẩn" : "Hiện"}
                        </span>
                    </div>
                    <button className="login-button" type="submit">
                        Đăng Nhập
                    </button>
                </form>
            </div>

            {/* Overlay */}
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Chào Mừng Trở Lại!</h1>
                        <p>Để kết nối, vui lòng đăng nhập bằng thông tin của bạn.</p>
                        <button className="but-style" onClick={handleSignInClick}>
                            Đăng Nhập
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Xin Chào!</h1>
                        <p>Nhập thông tin cá nhân của bạn để bắt đầu hành trình.</p>
                        <button className="but-style" onClick={handleSignUpClick}>
                            Đăng Ký
                        </button>
                    </div>
                </div>
            </div>

            {/* Hiển thị lỗi */}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default LoginRegister;
