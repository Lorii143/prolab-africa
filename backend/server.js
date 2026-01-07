import express from "express";  // or const express = require("express");
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // allows req.body to contain JSON


// 1️⃣ Middleware (must come **before routes**)
app.use(cors()); // allow cross-origin requests
app.use(express.json()); // parse JSON bodies

// 2️⃣ Your existing routes
app.get("/", (req, res) => {
  res.send("Prolab Africa API is running");
});

// 3️⃣ Contact form route (**this is where the frontend POST goes**)
app.post("/send-message", (req, res) => {
  const { name, email, phone, service, message } = req.body;

  console.log("Contact form received:", req.body);

  // Here you can:
  // - Send an email
  // - Save to a database
  // - Trigger any internal workflow

  // Then respond back to frontend
  res.status(200).send("Message received!");
});

// 4️⃣ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
