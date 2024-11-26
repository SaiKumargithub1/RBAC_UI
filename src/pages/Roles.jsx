import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import "../styles/pages.css";

const Roles = () => {
  const { roles, updateRole } = useAppContext();
  const [editingRole, setEditingRole] = useState(null);
  const [newRoleName, setNewRoleName] = useState("");
  const [rolePermissions, setRolePermissions] = useState([]);

  const permissionsList = ["Read", "Write", "Delete"];

  const handleSave = () => {
    const updatedRole = {
      ...editingRole,
      name: newRoleName,
      permissions: rolePermissions,
    };
    updateRole(editingRole.id, updatedRole);
    setEditingRole(null);
    setNewRoleName("");
    setRolePermissions([]);
  };

  const togglePermission = (permission) => {
    setRolePermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  return (
    <div className="roles-page">
      <div className="overflow-x-auto">
        {" "}
        {/* Ensuring the table is scrollable if it's too wide */}
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Permissions</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="border px-4 py-2">
                  {editingRole?.id === role.id ? (
                    <input
                      type="text"
                      value={newRoleName}
                      onChange={(e) => setNewRoleName(e.target.value)}
                      className="border px-2 py-1"
                    />
                  ) : (
                    role.name
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingRole?.id === role.id ? (
                    <div>
                      {permissionsList.map((permission) => (
                        <label
                          key={permission}
                          className="inline-flex items-center"
                        >
                          <input
                            type="checkbox"
                            checked={rolePermissions.includes(permission)}
                            onChange={() => togglePermission(permission)}
                            className="mr-2"
                          />
                          {permission}
                        </label>
                      ))}
                    </div>
                  ) : (
                    role.permissions.join(", ")
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingRole?.id === role.id ? (
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => {
                        setEditingRole(role);
                        setNewRoleName(role.name);
                        setRolePermissions(role.permissions);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
