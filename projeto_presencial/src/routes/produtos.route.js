//ROUTE PAKAGES
const express = require('express')
const produtosMidw = require('../middleware/produtos.midw')
const { Produto } = require('../db/models')
const router = express.Router()

//entry validate with middleware before handling
router.post('/', produtosMidw)
router.put('/', produtosMidw)

//ROUTE HANDLING
router.get('/', async (req, res) => {
  const produtos = await Produto.findAll()
  res.json({ produtos: produtos })
})

router.get('/:id', async (req, res) => { //get by id
  const produto = await Produto.findByPk(req.params.id)
  res.json({ produto: produto })
})

router.post('/', async (req, res) => {
  const produto = await Produto.create(req.body)
  res.json({ msg: "Produto adicionado!" })
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const produto = await Produto.findByPk(id)

  if (produto) {
    produto.nome = req.body.nome
    produto.descricao = req.body.descricao
    produto.preco = req.body.preco
    await produto.save()

    res.json({ msg: "Produto atualizado!" })
  } else {
    res.status(400).json({ msg: "Produto não encontrado!" })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const produto = await Produto.findByPk(id)

  if (produto){
    try{
      await produto.destroy()
      res.json({msg: "Produto deletado!"})
    } catch(err) {
      res.status(500).json({msg: "Falha ao deletar produto.", erro: err})
    }
  }else{
    res.status(400).json({msg: "Produto não encontrado!"})
  }
})

module.exports = router;