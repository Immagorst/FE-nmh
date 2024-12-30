import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ManageServices.css";

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({
        spaName: "",
        name: "",
        description: "",
        price: "",
    });
    const [editingService, setEditingService] = useState(null); // Để chỉnh sửa dịch vụ
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        fetchServices();
    }, []);

    // Lấy danh sách dịch vụ
    const fetchServices = async () => {
        try {
            const response = await fetch(`https://web-full-stack-3.onrender.com/api/services/all`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (!response.ok) throw new Error("Không thể lấy danh sách dịch vụ.");
            const data = await response.json();
            setServices(data.services);
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        }
    };

    // Thêm dịch vụ mới
    const handleAddService = async () => {
        if (!newService.spaName || !newService.name || !newService.price) {
            toast.error("Vui lòng nhập đầy đủ thông tin dịch vụ.", { position: "top-right" });
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/api/services/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(newService),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Không thể thêm dịch vụ mới.");
            }

            const data = await response.json();
            toast.success("Dịch vụ mới đã được thêm thành công!", { position: "top-right" });

            // Gọi lại API để cập nhật danh sách dịch vụ
            fetchServices();

            // Xóa form
            setNewService({ spaName: "", name: "", description: "", price: "" });
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        } finally {
            setLoading(false);
        }
    };

    // Chỉnh sửa dịch vụ
    const handleEditService = (service) => {
        setEditingService(service);
        setNewService({
            spaName: service.spaName,
            name: service.name,
            description: service.description,
            price: service.price,
        });
    };

    // Lưu thay đổi dịch vụ
    const handleUpdateService = async () => {
        if (!newService.spaName || !newService.name || !newService.price) {
            toast.error("Vui lòng nhập đầy đủ thông tin dịch vụ.", { position: "top-right" });
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`https://web-full-stack-3.onrender.com/api/services/update/${editingService._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(newService),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Không thể cập nhật dịch vụ.");
            }

            toast.success("Dịch vụ đã được cập nhật!", { position: "top-right" });
            fetchServices();
            setEditingService(null);
            setNewService({ spaName: "", name: "", description: "", price: "" });
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        } finally {
            setLoading(false);
        }
    };

    // Xóa dịch vụ
    const handleDeleteService = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa dịch vụ này?")) {
            try {
                const response = await fetch(`https://web-full-stack-3.onrender.com/api/services/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) throw new Error("Không thể xóa dịch vụ.");

                toast.success("Dịch vụ đã được xóa!", { position: "top-right" });
                fetchServices();
            } catch (error) {
                toast.error(error.message, { position: "top-right" });
            }
        }
    };

    return (
        <div>
            <ToastContainer />
            <h2>Quản Lý Dịch Vụ</h2>
            <div>
                <input
                    type="text"
                    placeholder="Tên Spa"
                    value={newService.spaName}
                    onChange={(e) => setNewService({ ...newService, spaName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Tên Dịch Vụ"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                />
                <textarea
                    placeholder="Mô Tả"
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Giá"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                />
                <button onClick={editingService ? handleUpdateService : handleAddService} disabled={loading}>
                    {editingService ? "Cập Nhật Dịch Vụ" : "Thêm Dịch Vụ"}
                </button>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Tên Spa</th>
                    <th>Tên Dịch Vụ</th>
                    <th>Mô Tả</th>
                    <th>Giá</th>
                    <th>Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {services.map((service) => (
                    <tr key={service._id}>
                        <td>{service.spaName}</td>
                        <td>{service.name}</td>
                        <td>{service.description}</td>
                        <td>{service.price}</td>
                        <td>
                            <button onClick={() => handleEditService(service)}>Sửa</button>
                            <button onClick={() => handleDeleteService(service._id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;
