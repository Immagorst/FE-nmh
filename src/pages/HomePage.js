import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../styles/HomePage.css";

const HomePage = () => {
    const spas = [
        { id: 1, name: "De L’Amour Spa", description: "Chuyên cung cấp dịch vụ chăm sóc sắc đẹp cao cấp." },
        { id: 2, name: "La Vie En Rose Beauty & Spa", description: "Trải nghiệm thư giãn hoàn hảo cho cơ thể và tâm hồn." },
        { id: 3, name: "Sorella Beauty Spa", description: "Dịch vụ chăm sóc sắc đẹp chuyên nghiệp." },
        { id: 4, name: "Thiên Hà Spa", description: "Dẫn đầu trong dịch vụ làm đẹp và trị liệu da." },
        { id: 5, name: "Perla Spa Hà Nội", description: "Dịch vụ massage và trị liệu thư giãn tuyệt vời." },
        { id: 6, name: "Shi Beauty & Spa", description: "Chăm sóc sắc đẹp với liệu trình thiên nhiên." },
        { id: 7, name: "Anam QT Spa", description: "Trải nghiệm spa chuẩn quốc tế tại Việt Nam." },
    ];

    return (
        <div className="homepage">
            <Header/>
            <div className="main-content">
                <div className="hero">
                    <h1>Chào mừng đến với La Spa</h1>
                    <p>Khám phá các dịch vụ làm đẹp chuyên nghiệp của chúng tôi.</p>
                </div>
                <div className="spa-list-section">
                    <h2>Danh Sách Các Spa</h2>
                    <div className="spa-list">
                        {spas.map((spa) => (
                            <div key={spa.id} className="spa-card">
                                <h3>{spa.name}</h3>
                                <p>{spa.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>

    );
};

export default HomePage;
