const express = require("express");
const router = express.Router();

let listaCarros = [];

router.get("/", (req,res) => {
    res.status(200).json({message:"A rota carros está funcionando."});
});

router.get("/lista", (req,res) => { //lista de todos os itens
    res.json(listaCarros);
});

router.get("/lista/:id", (req,res) => {  //lista de itens por id
    const id = req.params.id;
    res.status(200).json(listaCarros[id]);
});

router.post("/", (req,res) => { //cadastro
    const carro = req.body;

    if(!carro.modelo){
        res.status(400).json({message:"O campo Modelo está vazio."});
        return;
    }
    if(!carro.marca){
        res.status(400).json({message:"O campo Marca está vazio."});
        return;
    }
    if(!carro.ano){
        res.status(400).json({message:"O campo Ano está vazio."});
        return;
    }
    if(!carro.motor){
        res.status(400).json({message:"O campo Motor está vazio."});
        return;
    }

    listaCarros.push(carro); 
    res.status(201).json({message:"Carro cadastrado!"});
});

router.put("/:id", (req,res) => { //edição de item por id
    const id = req.params.id;
    const carro = listaCarros[id];
    listaCarros[id] = req.body;

    if(!carro.modelo){
        res.status(400).json({message:"O campo Modelo está vazio."});
        return;
    }
    if(!carro.marca){
        res.status(400).json({message:"O campo Marca está vazio."});
        return;
    }
    if(!carro.ano){
        res.status(400).json({message:"O campo Ano está vazio."});
        return;
    }
    if(!carro.motor){
        res.status(400).json({message:"O campo Motor está vazio."});
        return;
    }

    res.status(200).json(listaCarros[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaCarros[id];

    res.status(200).json(listaCarros);
});





module.exports = router;