const express = require("express");
const router = express.Router();

let listaLivros = [];

router.get("/", (req,res) => {
    res.status(200).json({message:"A rota livros está funcionando."});
});

router.get("/lista", (req,res) => { //lista de todos os itens
    res.json(listaLivros);
});

router.get("/lista/:id", (req,res) => {  //lista de itens por id
    const id = req.params.id;
    res.status(200).json(listaLivros[id]);
});

router.post("/", (req,res) => { //cadastro
    const livro = req.body;

    if(!livro.nome){
        res.status(400).json({message:"O campo Nome está vazio."});
        return;
    }
    if(!livro.autor){
        res.status(400).json({message:"O campo Autor está vazio."});
        return;
    }
    if(!livro.ano){
        res.status(400).json({message:"O campo Ano está vazio."});
        return;
    }
    if(!livro.genero){
        res.status(400).json({message:"O campo Gênero está vazio."});
        return;
    }

    listaLivros.push(livro); 
    res.status(201).json({message:"Livro cadastrado!"});
});

router.put("/:id", (req,res) => { //edição de item por id
    const id = req.params.id;
    const livro = listaLivros[id];
    
    console.log(livro);

    listaLivros[id] = req.body;

    if(!livro.nome){
        res.status(400).json({message:"O campo Nome está vazio."});
        return;
    }
    if(!livro.autor){
        res.status(400).json({message:"O campo Autor está vazio."});
        return;
    }
    if(!livro.ano){
        res.status(400).json({message:"O campo Ano está vazio."});
        return;
    }
    if(!livro.genero){
        res.status(400).json({message:"O campo Gênero está vazio."});
        return;
    }

    res.status(200).json(listaLivros[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaLivros[id];

    res.status(200).json(listaLivros);
});





module.exports = router;