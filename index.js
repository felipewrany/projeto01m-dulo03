const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({message:"A página está linda"});
});

const livrosRouter = require("./models/livros");
app.use("/livros",livrosRouter);

const cervejasRouter = require("./models/cervejas");
app.use("/cervejas",cervejasRouter);

const carrosRouter = require("./models/carros");
app.use("/carros",carrosRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});