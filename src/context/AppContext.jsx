import React, { createContext, useState, useContext } from "react";
import { mockUsers, mockRoles, mockPermissions } from "../utils/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // State for users, roles, and permissions
  const [users, setUsers] = useState(mockUsers);
  const [roles, setRoles] = useState(mockRoles);
  const [permissions, setPermissions] = useState(mockPermissions);

  const syncMockData = () => {
    mockUsers.length = 0;
    mockUsers.push(...users);
    mockRoles.length = 0;
    mockRoles.push(...roles);

    mockPermissions.length = 0;
    mockPermissions.push(...permissions);
  };

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
    syncMockData();
  };
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    syncMockData();
  };
  const updateUser = (id, updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
    syncMockData();
  };

  const addRole = (role) => {
    setRoles((prev) => [...prev, role]);
    syncMockData();
  };
  const deleteRole = (id) => {
    setRoles((prev) => prev.filter((role) => role.id !== id));
    syncMockData();
  };
  const updateRole = (id, updatedRole) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === id
          ? {
              ...role,
              name: updatedRole.name,
              permissions: updatedRole.permissions,
            }
          : role
      )
    );
    syncMockData();
  };

  const addPermission = (permission) => {
    if (!permissions.includes(permission)) {
      setPermissions((prev) => [...prev, permission]);
      syncMockData();
    }
  };

  const deletePermission = (permission) => {
    setPermissions((prev) => prev.filter((perm) => perm !== permission));
    syncMockData();
  };

  return (
    <AppContext.Provider
      value={{
        users,
        roles,
        permissions,
        addUser,
        deleteUser,
        updateUser,
        addRole,
        deleteRole,
        updateRole,
        addPermission,
        deletePermission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
