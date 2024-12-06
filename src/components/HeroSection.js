import React from "react";
import "./../styles/HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Chào mừng đến với Min H Spa</h1>
                <p>Trải nghiệm dịch vụ làm đẹp tuyệt vời tại đây.</p>
                <button className="btn-book">Đặt lịch ngay</button>
            </div>
        </section>
    );
};

export default HeroSection;
