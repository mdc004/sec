const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Abilita CORS solo per il client su localhost:5500
//app.use(cors({
//  origin: "http://localhost:5500"
//}));

// Endpoint API
app.get("/data", (req, res) => {
  res.json({ message: "Hello from server!", time: new Date().toISOString() });
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
