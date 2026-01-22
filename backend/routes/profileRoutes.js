// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { User } = require("../models");

// GET profile
router.get("/", authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: ["id", "name", "email"],
  });
  res.json(user);
});

// UPDATE profile
router.put("/", authMiddleware, async (req, res) => {
  const { name, email } = req.body;

  await User.update({ name, email }, { where: { id: req.user.id } });

  res.json({ message: "Profile updated successfully" });
});

module.exports = router;
