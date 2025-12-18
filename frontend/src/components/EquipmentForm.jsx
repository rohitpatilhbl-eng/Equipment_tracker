function EquipmentForm({
  form,
  editingId,
  handleChange,
  saveEquipment,
  resetForm
}) {
  return (
    <div className="form">
      <input
        name="name"
        placeholder="Equipment Name"
        value={form.name}
        onChange={handleChange}
      />

      <select name="type" value={form.type} onChange={handleChange}>
  <option value="Machine">Machine</option>
  <option value="Vessel">Vessel</option>
  <option value="Tank">Tank</option>
  <option value="Mixer">Mixer</option>
</select>


      <select name="status" value={form.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="lastCleanedDate"
        value={form.lastCleanedDate}
        onChange={handleChange}
      />

      <button onClick={saveEquipment}>
        {editingId ? "Update" : "Add"}
      </button>

      {editingId && (
        <button className="cancel" onClick={resetForm}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default EquipmentForm;
