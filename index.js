const express = require("express");
const urlRoutes = require("./routes/url");
const ConnectDB = require("./ConnectDB");
const app = express();
const PORT = 3000;
ConnectDB();

app.use(express.json());

app.use("/url", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server running at PORT`, PORT);
});
