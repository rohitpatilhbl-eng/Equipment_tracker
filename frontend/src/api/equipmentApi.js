const API_URL = "http://localhost:5000/api/equipment";

export const getEquipment = () =>
  fetch(API_URL).then(res => res.json());

export const addEquipment = (data) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const updateEquipment = (id, data) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const deleteEquipmentById = (id) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE" });
