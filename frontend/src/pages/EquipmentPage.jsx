import { useEffect, useState } from "react";
import EquipmentForm from "../components/EquipmentForm";
import EquipmentTable from "../components/EquipmentTable";
import {
  getEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipmentById
} from "../api/equipmentApi";

function EquipmentPage() {
  const [equipment, setEquipment] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    type: "Machine",
    status: "Active",
    lastCleanedDate: ""
  });

  useEffect(() => {
    getEquipment().then(setEquipment);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveEquipment = async () => {
    if (!form.name || !form.lastCleanedDate) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      const updated = await updateEquipment(editingId, form);
      setEquipment(
        equipment.map(item =>
          item.id === editingId ? updated : item
        )
      );
      resetForm();
    } else {
      const newItem = await addEquipment(form);
      setEquipment([...equipment, newItem]);
      resetForm();
    }
  };

  const editEquipment = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  const deleteEquipment = async (id) => {
    await deleteEquipmentById(id);
    setEquipment(equipment.filter(item => item.id !== id));
  };

  const resetForm = () => {
    setForm({
      name: "",
      type: "Machine",
      status: "Active",
      lastCleanedDate: ""
    });
    setEditingId(null);
  };

  return (
    <div className="container">
      <h2>Equipment Tracker</h2>

      <EquipmentForm
        form={form}
        editingId={editingId}
        handleChange={handleChange}
        saveEquipment={saveEquipment}
        resetForm={resetForm}
      />

      <EquipmentTable
        equipment={equipment}
        editEquipment={editEquipment}
        deleteEquipment={deleteEquipment}
      />
    </div>
  );
}

export default EquipmentPage;
