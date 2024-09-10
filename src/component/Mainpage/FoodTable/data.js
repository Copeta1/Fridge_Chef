export default function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

export const rows = [
  createData(1, "Chicken Breast", 165, 3.6, 0, 31),
  createData(2, "Apple", 95, 0.3, 25, 0.5),
  createData(3, "Broccoli", 55, 0.6, 11, 3.7),
  createData(4, "Salmon", 208, 13, 0, 20),
  createData(5, "Avocado", 160, 15, 9, 2),
  createData(6, "Brown Rice", 112, 0.9, 23, 2.6),
  createData(7, "Peanut Butter", 188, 16, 7, 8),
  createData(8, "Greek Yogurt", 59, 0.4, 3.6, 10),
  createData(9, "Sweet Potato", 86, 0.1, 20, 1.6),
  createData(10, "Spinach", 23, 0.4, 3.6, 2.9),
  createData(11, "Carrot", 25, 0.1, 6, 0.6),
  createData(12, "Tofu", 25, 0.1, 6, 0.6),
  createData(13, "Blueberries", 57, 0.3, 14, 0.7),
];

export const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Food (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];
