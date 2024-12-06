import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

const HomePage = () => {
    const services = [
        {
            id: 1,
            name: "Massage thư giãn",
            description: "Trải nghiệm sự thoải mái với dịch vụ massage chuyên nghiệp.",
            image: "/assets/massage.jpg",
        },
        {
            id: 2,
            name: "Trị liệu da mặt",
            description: "Chăm sóc da chuyên sâu cho mọi loại da.",
            image: "/assets/skincare.jpg",
        },
    ];

    return (
        <>
            <Header />
            <HeroSection />
            <div className="services">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
