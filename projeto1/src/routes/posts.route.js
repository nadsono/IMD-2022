//ROUTE PAKAGES
const express = require('express')
const { v4: uuidv4 } = require('uuid') //to use call uuidv4 on a constant
const postsMidw = require('../middlewares/validPostsMidw')
const { Post, Cliente } = require('../db/models') //Models for use of sequelize SGBD
const multer = require ( 'multer' )
const path = require('path')

const router = express.Router()

//uploads control
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname)) 
    }
})

const fileFilter = (req, file, cb) => {
    const extensions =  /jpeg|jpg/i
    const fileTest = extensions.test(path.extname(file.originalname));
    if (!fileTest){
        return cb('Arquivo não suportado. Apenas jpg e jpeg são suportados.')
    } else {
        cb(null, true)
    }
}
var upload = multer({ storage: storage, fileFilter: fileFilter }) //multer inition

//entry validate with middleware before handling
router.post('/', upload.single('foto'))
router.post('/', postsMidw)
router.put('/', postsMidw)

router.get('/', async (req, res)=>{
    const posts = await Post.findAll()
    const postCheck = resultOK(posts)
    res.json({posts: postCheck})
})
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const post = await Post.findByPk(id, {
        include: [{
            model: Cliente
        }],
        raw: true,
        nest: true
    })
    const postCheck = resultOK(post)

    if (postCheck){
        res.json({post: postCheck})
    }else{
        res.status(400).json({msg: "post não encontrado!"})
    }
})

router.post('/', async (req, res)=>{
    const data = req.body;
    const clienteExist = await Cliente.findByPk(data.clienteID)
    
    if(req.file){
        data.foto = `/static/uploads/${req.file.filename}`;
       // await data.save();
    }

    if(clienteExist){
        const post = await 
        Post.create(data)
        //res.send(req.body);    
        res.json({msg: "post adicionado!"})
    } else {
        res.json({msg: "cliente não encontrado."})
    }
})
router.post('/upload/:id', upload.single('foto'), async (req, res) => {
    console.log(req.file)

    const idpost = req.params.id
    const post = await Post.findByPk(idpost)

    if (post){
        post.foto = `/static/uploads/${req.file.filename}`
        await post.save()

        res.json({msg: "upload realizado!"})
    }else{
        res.status(400).json({msg: "post não encontrado!"})
    }

    res.json({msg: 'Arquivo enviado com sucesso'})
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

//RES TREATMENT
function resultOK(post){
    const result = Object.assign({}, post)

    if (result.createdAt) delete result.createdAt
    if (result.updatedAt) delete result.updatedAt
    if (result.clienteID) delete result.clienteID
    if (result.Cliente){
        if (result.Cliente.createdAt) delete result.Cliente.createdAt
        if (result.Cliente.updatedAt) delete result.Cliente.updatedAt
        if (result.Cliente.id) delete result.Cliente.id
    }
    return result
}

module.exports = router