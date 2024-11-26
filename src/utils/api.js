export const mockUsers = [
  { id: 1, name: "Aarav", role: "Admin", status: "Active" },
  { id: 2, name: "Neha", role: "Editor", status: "Inactive" },
  { id: 3, name: "Ishaan", role: "Viewer", status: "Active" },
  { id: 4, name: "Rohan", role: "Manager", status: "Active" },
  { id: 5, name: "Priya", role: "HR", status: "Inactive" },
  { id: 6, name: "Vikram", role: "Engineer", status: "Active" },
  { id: 7, name: "Diya", role: "Support", status: "Active" },
  { id: 8, name: "Karan", role: "Sales", status: "Inactive" },
  { id: 9, name: "Sanya", role: "Finance", status: "Active" },
  { id: 10, name: "Raj", role: "Marketing", status: "Active" },
  { id: 11, name: "Meera", role: "Customer Success", status: "Inactive" },
  { id: 12, name: "Arjun", role: "Operations", status: "Active" },
  { id: 13, name: "Neha", role: "IT", status: "Inactive" },
  { id: 14, name: "Simran", role: "Design", status: "Active" },
  { id: 15, name: "Karan", role: "Development", status: "Active" },
  { id: 16, name: "Aditi", role: "Intern", status: "Inactive" },
  { id: 17, name: "Harsh", role: "Freelancer", status: "Active" },
  { id: 18, name: "Pooja", role: "Consultant", status: "Active" },
  { id: 19, name: "Vishal", role: "Legal", status: "Inactive" },
  { id: 20, name: "Tanya", role: "Executive", status: "Active" },
];

export const mockRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
  { id: 4, name: "Manager", permissions: ["Read", "Write", "Delete"] },
  { id: 5, name: "HR", permissions: ["Read", "Write"] },
  { id: 6, name: "Engineer", permissions: ["Read", "Write"] },
  { id: 7, name: "Support", permissions: ["Read"] },
  { id: 8, name: "Sales", permissions: ["Read", "Write"] },
  { id: 9, name: "Finance", permissions: ["Read", "Write"] },
  { id: 10, name: "Marketing", permissions: ["Read", "Write"] },
  { id: 11, name: "Customer Success", permissions: ["Read", "Write"] },
  { id: 12, name: "Operations", permissions: ["Read", "Write", "Delete"] },
  { id: 13, name: "IT", permissions: ["Read", "Write"] },
  { id: 14, name: "Design", permissions: ["Read", "Write"] },
  { id: 15, name: "Development", permissions: ["Read", "Write", "Delete"] },
  { id: 16, name: "Intern", permissions: ["Read"] },
  { id: 17, name: "Freelancer", permissions: ["Read", "Write"] },
  { id: 18, name: "Consultant", permissions: ["Read"] },
  { id: 19, name: "Legal", permissions: ["Read"] },
  { id: 20, name: "Executive", permissions: ["Read", "Write", "Delete"] },
];

export const mockPermissions = ["Read", "Write", "Delete"];