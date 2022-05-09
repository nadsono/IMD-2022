//ROUTE PAKAGES
const express = require('express')
const clienteMidw = require('../middlewares/validClienteMidw')
const { Cliente } = require('../db/models')
const router = express.Router()

//const clientes = {};re
   
//entry validate with middleware before handling
router.post('/', clienteMidw)
router.put('/', clienteMidw)

//ROUTE HANDLING
router.get('/', async (req, res)=>{
    const clientes = await Cliente.findAll()
    res.json({clientes: clientes})
})
router.get('/:id', async (req, res)=>{ //get by id
    const id = req.params.id;
    const cliente = await Cliente.findByPk(id);

    if (cliente){
        res.json({cliente: cliente})
    }else{
        res.status(400).json({msg: "Cliente não encontrado!"})
    }
})

router.post('/', async (req, res)=>{
    const cliente = await Cliente.create(req.body)    
    //cliente.id = uuidv4();
    console.log(req.body);
    res.json({msg: "CLiente adicionado"})
})

router.put('/:id', async (req, res)=>{
    const idCliente = req.params.id;
    const cliente = await Cliente.findByPk(idCliente)

    if (cliente){
        cliente.nome = req.body.nome
        cliente.email = req.body.email
        await cliente.save()
        
        res.json({msg: "CLiente atualizado!"})
    }else{
        res.status(400).json({msg: "Cliente não encontrado!"})
    }
})

router.delete('/:id', async (req, res) => {
    const idCliente = req.params.id
    const cliente = await Cliente.findByPk(idCliente)

    if (cliente){
        try {
            await cliente.destroy()
            res.json({msg: "Cliente deleteado com sucesso!"})
        } catch (error) {
            res.status(500).json({msg: "Falha ao deletar cliente.", erro: error})
        }

    }else{
        res.status(400).json({msg: "Cliente não encontrado!"})
    }
})

module.exports = router