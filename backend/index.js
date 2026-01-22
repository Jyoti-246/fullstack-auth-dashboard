require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/auth", require("./routes/authRoutes")); // login/signup
app.use("/api/tasks", require("./routes/taskRoutes")); // protected routes
app.use("/api/profile", require("./routes/profileRoutes"));

app.get("/", (req, res) => res.send("Server is running 🚀"));

sequelize
  .authenticate()
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
