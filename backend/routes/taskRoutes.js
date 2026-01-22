const express = require("express");
const { Task } = require("../models");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create task
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      userId: req.user.id, // 🔥 THIS is why JWT matters
    });

    res.status(201).json(task);
  } catch (err) {
    console.error("CREATE TASK ERROR:", err);
    res.status(500).json({ message: "Failed to create task" });
  }
});

// Get tasks
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.findAll({ where: { userId: req.user.id } });
  res.json(tasks);
});

// Update task
router.put("/:id", authMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  await task.update({
    title,
    description, // ← update description too
  });
  res.json(task);
});
// Delete task
router.delete("/:id", authMiddleware, async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  await task.destroy();
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
