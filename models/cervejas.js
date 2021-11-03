const express = require("express");
const router = express.Router();

let listaCervejas = [];

router.get("/", (req,res) => {
    res.status(200).json({message:"A rota cervejas está funcionando."});
});

router.get("/lista", (req,res) => { //lista de todos os itens
    res.json(listaCervejas);
});

router.get("/lista/:id", (req,res) => {  //lista de itens por id
    const id = req.params.id;
    res.status(200).json(listaCervejas[id]);
});

router.post("/", (req,res) => { //cadastro
    const cerveja = req.body;

    if(!cerveja.nome){
        res.status(400).json({message:"O campo Nome está vazio."});
        return;
    }
    if(!cerveja.fabricante){
        res.status(400).json({message:"O campo Fabricante está vazio."});
        return;
    }
    if(!cerveja.tipo){
        res.status(400).json({message:"O campo Tipo está vazio."});
        return;
    }
    if(!cerveja.ibu){
        res.status(400).json({message:"O campo IBU está vazio."});
        return;
    }

    listaCervejas.push(cerveja); 
    res.status(201).json({message:"Cerveja cadastrada!"});
});

router.put("/:id", (req,res) => { //edição de item por id
    const id = req.params.id;
    const cerveja = listaCervejas[id];
    listaCervejas[id] = req.body;

    if(!cerveja.nome){
        res.status(400).json({message:"O campo Nome está vazio."});
        return;
    }
    if(!cerveja.fabricante){
        res.status(400).json({message:"O campo Fabricante está vazio."});
        return;
    }
    if(!cerveja.tipo){
        res.status(400).json({message:"O campo Tipo está vazio."});
        return;
    }
    if(!cerveja.ibu){
        res.status(400).json({message:"O campo IBU está vazio."});
        return;
    }

    res.status(200).json(listaCervejas[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaCervejas[id];

    res.status(200).json(listaCervejas);
});





module.exports = router;