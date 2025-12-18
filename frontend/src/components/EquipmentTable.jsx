function EquipmentTable({ equipment, editEquipment, deleteEquipment }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {equipment.length === 0 && (
          <tr>
            <td colSpan="5">No equipment found</td>
          </tr>
        )}

        {equipment.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.lastCleanedDate}</td>
            <td>
              <button
                className="action-btn edit-btn"
                onClick={() => editEquipment(item)}
              >
                Edit
              </button>
              <button
                className="action-btn delete-btn"
                onClick={() => deleteEquipment(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EquipmentTable;
