const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const walletRoutes = require("./routes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://ullah4406732:asad1234@cluster0.nco1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Update with your connection string
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/wallet", walletRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
