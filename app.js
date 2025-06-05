const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();


const app = express();


connectDB();


app.use(express.json());



app.get("/", (req, res) => {
  res.send("API de autenticación funcionando!");
});



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
