import React, { useState } from "react";
import "./../styles/ServicePage.css";

const ServicePage = () => {
    const [selectedSpa, setSelectedSpa] = useState(null); // Trạng thái spa được chọn

    const spas = [
        {
            id: 1,
            name: "De L’Amour Spa",
            services: [
                "REFRESH SKIN ",
                "Thải Chì Môi ",
                "Thải Chì Da Mặt ",
                "Gói COLLAGEN ",
                "Trị Mụn ",
                "Ủ Trắng Da Mặt ",
                "Trị Thâm ",
                "Massage thư giãn ",  // Dịch vụ mới
                "Chăm sóc da mặt cơ bản ",  // Dịch vụ mới
            ],
        },
        {
            id: 2,
            name: "La Vie En Rose Beauty & Spa",
            services: [
                "Tiêm truyền nuôi da: Tiêm cocktail 5TBG, Tiêm Radiance 10TBG, Tiêm TBG điều trị nám",
                "PP làm đẹp không phẫu thuật: Tiêm filler Juvederm, Tiêm botox, Nhấn mí CN Laser",
                "Chăm sóc body: Giảm béo CNC, Tắm dưỡng trắng body TCTN, Triệt lông vĩnh viễn công nghệ cao",
                "Mát-xa body thư giãn ", // Dịch vụ mới
                "Điều trị nám với laser ", // Dịch vụ mới
            ],
        },
        {
            id: 3,
            name: "Sorella Beauty Spa",
            services: [
                "Liệu trình chăm sóc sắc đẹp chuyên nghiệp.",
                "Chăm sóc da mặt bằng tinh chất vitamin C ", // Dịch vụ mới
                "Phục hồi tóc hư tổn ", // Dịch vụ mới
            ],
        },
        {
            id: 4,
            name: "Thiên Hà Spa",
            services: [
                "Dịch vụ chăm sóc da mặt và trị liệu cao cấp.",
                "Massage thư giãn toàn thân ", // Dịch vụ mới
                "Điều trị mụn chuyên sâu ", // Dịch vụ mới
            ],
        },
        {
            id: 5,
            name: "Perla Spa Hà Nội",
            services: [
                "Massage thư giãn, trị liệu da.",
                "Chăm sóc da mặt chuyên sâu ", // Dịch vụ mới
                "Tắm trắng toàn thân ", // Dịch vụ mới
            ],
        },
        {
            id: 6,
            name: "Shi Beauty & Spa",
            services: [
                "Chăm sóc sắc đẹp với liệu trình thiên nhiên.",
                "Điều trị thâm quầng mắt ", // Dịch vụ mới
                "Trẻ hóa da bằng công nghệ ánh sáng ", // Dịch vụ mới
            ],
        },
        {
            id: 7,
            name: "Anam QT Spa",
            services: [
                "Dịch vụ làm đẹp chuẩn quốc tế.",
                "Liệu trình chăm sóc da mặt cao cấp ", // Dịch vụ mới
                "Massage thư giãn toàn thân ", // Dịch vụ mới
            ],
        },
    ];

    const handleClick = (spaId) => {
        setSelectedSpa(selectedSpa === spaId ? null : spaId); // Bấm lại để ẩn/hiện dịch vụ
    };

    return (
        
        <div className="service-page">
        <div className="content-wrapper">
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
      </div>
    );
  };
  
  export default ServicePage;