import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import "../styles/pages.css";

const Users = () => {
  const { users, addUser, updateUser, deleteUser } = useAppContext();

  const [editingUser, setEditingUser] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [newName, setNewName] = useState("");
  const [isAddingUser, setIsAddingUser] = useState(false);

  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("");
  const [newUserStatus, setNewUserStatus] = useState("Active");

  const handleAddUser = () => {
    if (newUserName && newUserRole) {
      const newUser = {
        id: users.length + 1,
        name: newUserName,
        role: newUserRole,
        status: newUserStatus,
      };
      addUser(newUser);
      setNewUserName("");
      setNewUserRole("");
      setNewUserStatus("Active");
      setIsAddingUser(false);
    }
  };

  const handleSaveChanges = (userId) => {
    const updatedUser = { ...editingUser, name: newName, status: newStatus };
    updateUser(userId, updatedUser);
    setEditingUser(null);
    setNewName("");
    setNewStatus("");
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsAddingUser(true)}
      >
        Add New User
      </button>

      {isAddingUser && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Add New User</h3>
          <div className="mb-2">
            <label className="block">Name</label>
            <input
              type="text"
              className="border px-2 py-1 w-full"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block">Role</label>
            <input
              type="text"
              className="border px-2 py-1 w-full"
              value={newUserRole}
              onChange={(e) => setNewUserRole(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block">Status</label>
            <select
              value={newUserStatus}
              onChange={(e) => setNewUserStatus(e.target.value)}
              className="border px-2 py-1 w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button
            onClick={handleAddUser}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </div>
      )}

      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">
                {editingUser?.id === user.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                {editingUser?.id === user.id ? (
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="border px-2 py-1"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                ) : (
                  user.status
                )}
              </td>
              <td className="border px-4 py-2">
                {editingUser?.id === user.id ? (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => handleSaveChanges(user.id)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => {
                        setEditingUser(user);
                        setNewName(user.name);
                        setNewStatus(user.status);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
