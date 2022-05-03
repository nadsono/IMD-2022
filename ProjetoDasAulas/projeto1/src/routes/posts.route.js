//ROUTE PAKAGES
const express = require('express')
const { v4: uuidv4 } = require('uuid') //to use call uuidv4 on a constant
const postsMidw = require('../middlewares/validPostsMidw')
const { Post, Cliente } = require('../db/models') //Model for use of sequelize SGBD
const router = express.Router()

//const posts = {};

//entry validate with middleware before handling
router.post('/', postsMidw)
router.put('/', postsMidw)

router.get('/', async (req, res)=>{
    const posts = await Post.findAll()
    res.json({posts: posts})
})
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const post = await Post.findByPk(id)

    if (post){
        res.json({post: post})
    }else{
        res.status(400).json({msg: "post não encontrado!"})
    }
})

router.post('/', async (req, res)=>{
    const clienteExist = await Cliente.findByPk(req.body.clienteId)

    if(clienteExist){
        const post = await Post.create(req.body)
        //res.send(req.body);
        res.json({msg: "post adicionado!"})
    } else {
        res.json({msg: "cliente não encontrado."})
    }
})

router.put('/:id', async (req, res)=>{
    const idpost = req.params.id
    const post = await Post.findByPk(idpost)

    if (post){
        post.titulo = req.body.titulo;
        post.texto = req.body.texto;
        await post.save()

        res.json({msg: "post atualizado!"})
    }else{
        res.status(400).json({msg: "post não encontrado!"})
    }
})

router.delete('/:id', async (req, res) => {
    const idpost = req.params.id
    const post = await Post.findByPk(idpost)

    if(post){
        await post.destroy()
        res.json({msg: "post deleteado!"})
    } else {
        res.status(400).json({msg: "post não encontrado!"})
    }

})

module.exports = router