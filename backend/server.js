const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./data.json";

// Read data
const readData = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

// Write data
const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// GET all equipment
app.get("/api/equipment", (req, res) => {
  const data = readData();
  res.json(data);
});

// POST new equipment
app.post("/api/equipment", (req, res) => {
  const data = readData();
  const newItem = {
    id: uuidv4(),
    ...req.body
  };
  data.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

// PUT update equipment
app.put("/api/equipment/:id", (req, res) => {
  const data = readData();
  const index = data.findIndex(item => item.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Equipment not found" });
  }

  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
});

// DELETE equipment
app.delete("/api/equipment/:id", (req, res) => {
  const data = readData();
  const filtered = data.filter(item => item.id !== req.params.id);
  writeData(filtered);
  res.json({ message: "Deleted successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
