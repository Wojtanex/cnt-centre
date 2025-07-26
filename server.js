const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Ustawienie folderu głównego jako źródła plików statycznych
app.use(express.static(__dirname));

// Obsługa strony głównej
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
