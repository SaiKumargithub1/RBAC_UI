import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import "../styles/pages.css";

const Permissions = () => {
  const { permissions, addPermission, deletePermission } = useAppContext();
  const [newPermission, setNewPermission] = useState("");

  const handleAddPermission = () => {
    if (newPermission && !permissions.includes(newPermission)) {
      addPermission(newPermission);
      setNewPermission("");
    }
  };

  const handleDeletePermission = (permission) => {
    deletePermission(permission);
  };

  return (
    <div className="permissions-page">
      <h2 className="text-2xl font-bold mb-4">Manage Permissions</h2>

      <div className="add-permission">
        <input
          type="text"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          placeholder="Enter new permission"
          className="input-permission"
        />
        <button onClick={handleAddPermission} className="btn-add-permission">
          Add Permission
        </button>
      </div>

      <ul className="list-disc pl-5">
        {permissions.map((permission, index) => (
          <li key={index} className="permission-item">
            {permission}
            <button
              onClick={() => handleDeletePermission(permission)}
              className="btn-delete-permission"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Permissions;
