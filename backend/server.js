import express from "express";

const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Prolab Africa backend running");
});

// contact route (temporary test)
app.post("/send-message", (req, res) => {
  console.log(req.body);
  res.send("Message received");
});

// IMPORTANT: Render provides PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
