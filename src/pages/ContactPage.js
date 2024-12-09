import React, { useState } from "react";
import "./../styles/ContactForm.css";

const ContactPage = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic gửi tin nhắn
        console.log("Message: ", message);
    };

    return (
        <>

            <div className="main-content">
                <div className="contact-form">
                    <h2>Liên Hệ với chúng tôi</h2>
                    <form onSubmit={handleSubmit}>
          <textarea
              placeholder="Viết tin nhắn..."
              required
              onChange={(e) => setMessage(e.target.value)}
          />
                        <button type="submit">Gửi tin nhắn</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
