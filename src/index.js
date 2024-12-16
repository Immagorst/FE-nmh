import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Đảm bảo bạn đã bọc app trong BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Sử dụng createRoot

root.render(
    <BrowserRouter>   {/* Bọc App trong BrowserRouter */}
        <App />
    </BrowserRouter>
);
