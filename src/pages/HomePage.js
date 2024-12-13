import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./../styles/HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();
    const spas = [
        {
            id: 1,
            name: "De L’Amour Spa",
            address: [
                "Ng. 11 P. Thái Hà, Trung Liệt, Đống Đa, Hà Nội" ,
            ],
            hotline: [
                "0947019567",
            ],
        },
        {
            id: 2,
            name: "La Vie en Rose Beauty & Spa ",
            address: [
                "36 ngõ 100 Trần Đại Nghĩa, Hà Nội"
            ],
            hotline: [
                "0908779669",
            ],
        },
        {
            id: 3,
            name: "Sorella Beauty Spa",
            address: [
               "Số nhà 6 ngõ 93 Nguyễn Đình Chiểu (ngõ 49 Vân hồ 2 cũ), Hai Bà Trưng, Hà Nội",
               "Penhouse Tầng 9, toà nhà 15A Nguyễn Khang, Cầu Giấy, Hà Nội",
               "Park 7-zone B-tầng 5-phòng 0503, Times city, Hà Nội",
            ],
            hotline: [
                "0902752725",
                "0901412918",
                "0896623089",
            ],
        },
        {
            id: 4,
            name: "Thiên Hà Spa",
            address: [
                "176 Trần Duy Hưng - Cầu Giấy - Hà Nội",
                "2008 Springhill Ct. Birmingham.Al 35242, Australia",
                "Spencer outlet Centre Shop, T46 Docklands Vic 3008, USA",
            ],
            hotline: [
                "0969267726",
            ],
        },
        {
            id: 5,
            name: "Perla Spa Hà Nội",
            address: [
                "số 4 ngõ 73 Hoàng Cầu ",
                "20C – 26 Vạn Phúc, Liễu Giai",
            ],
            hotline: [
                "0359800818",
                "0359800989",
            ],
        },
        {
            id: 6,
            name: "Shi Beauty & Spa",
            address: [
                "6B Trần Quốc Toản – Hoàn Kiếm",
                "57 Vạn Bảo – Ba Đình",
                "154 Nghi Tàm – Tây Hồ",
            ],
            hotline: [
                "02438229333",
                "0944473333",
                "0912862988",
            ],
        },
        {
            id: 7,
            name: "Anam QT Spa",
            address: [
                "9 Đ. Xuân Diệu, Quảng An, Tây Hồ, Hà Nội",
            ],
            hotline: [
                "02439286116",
            ],
        },
    ];

    const handleBookNow = () => {
        navigate('/booking'); // Điều hướng đến trang /book
    };
    return (
        <div className="homepage">
            <div className="hero" id="home">
                <h1>Chào mừng đến với La Vie Spa</h1>
                <p>Khám phá dịch vụ chăm sóc sắc đẹp tốt nhất dành cho bạn.</p>
                <button className="cta-button" onClick={handleBookNow}>Đặt Lịch Ngay</button> {/* Thêm sự kiện click */}
            </div>

            <div className="spa-list-section" id="address">
                <h2>Danh Sách Các Spa</h2>
                <div className="spa-list">
                    {spas.map((spa) => (
                        <div key={spa.id} className="spa-card">
                            <h3>{spa.name}</h3>
                            <ul>
                                Địa chỉ: 
                                {spa.address.map((address, index) => (
                                    <li key={index}>{address}</li>
                                ))}
                            </ul>
                            <ul>
                                Hotline: 
                                {spa.hotline.map((hotline, index) => (
                                    <li key={index}>{hotline}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
