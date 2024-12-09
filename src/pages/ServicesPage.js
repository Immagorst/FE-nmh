import React, { useState } from "react";
import "./../styles/ServicePage.css";

const ServicePage = () => {
    const [selectedSpa, setSelectedSpa] = useState(null); // Trạng thái spa được chọn

    const spas = [
        {
            id: 1,
            name: "De L’Amour Spa",
            services: [
                "REFRESH SKIN 100K",
                "Thải Chì Môi 100K 60 phút",
                "Thải Chì Da Mặt 180K 80-90 phút",
                "Gói COLLAGEN 180K 80 phút",
                "Trị Mụn 280K 90 phút",
                "Ủ Trắng Da Mặt 230K 80 phút",
                "Trị Thâm 280K 90 phút",
            ],
        },
        {
            id: 2,
            name: "La Vie En Rose Beauty & Spa",
            services: [
                "Tiêm truyền nuôi da: Tiêm cocktail 5TBG, Tiêm Radiance 10TBG, Tiêm TBG điều trị nám",
                "PP làm đẹp không phẫu thuật: Tiêm filler Juvederm, Tiêm botox, Nhấn mí CN Laser",
                "Chăm sóc body: Giảm béo CNC, Tắm dưỡng trắng body TCTN, Triệt lông vĩnh viễn công nghệ cao",
            ],
        },
        {
            id: 3,
            name: "Sorella Beauty Spa",
            services: ["Liệu trình chăm sóc sắc đẹp chuyên nghiệp."],
        },
        {
            id: 4,
            name: "Thiên Hà Spa",
            services: ["Dịch vụ chăm sóc da mặt và trị liệu cao cấp."],
        },
        {
            id: 5,
            name: "Perla Spa Hà Nội",
            services: ["Massage thư giãn, trị liệu da."],
        },
        {
            id: 6,
            name: "Shi Beauty & Spa",
            services: ["Chăm sóc sắc đẹp với liệu trình thiên nhiên."],
        },
        {
            id: 7,
            name: "Anam QT Spa",
            services: ["Dịch vụ làm đẹp chuẩn quốc tế."],
        },
    ];

    const handleClick = (spaId) => {
        setSelectedSpa(selectedSpa === spaId ? null : spaId); // Bấm lại để ẩn/hiện dịch vụ
    };

    return (
        <div className="service-page">
            <h1>Danh Sách Các Spa</h1>
            <div className="spa-grid">
                {spas.map((spa) => (
                    <div
                        key={spa.id}
                        className={`spa-card ${selectedSpa === spa.id ? "expanded" : ""}`}
                    >
                        <h2 onClick={() => handleClick(spa.id)}>{spa.name}</h2>
                        {selectedSpa === spa.id && (
                            <ul className="service-list">
                                {spa.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
