//library ajv for validation
const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require("ajv-formats")
addFormats(ajv)

//schema import
const postSchema = require('../schemas/posts.schema')

function validpost(req, res, next){
    const post = req.body
    const validate = ajv.compile(postSchema)
    const valid = validate(post) 
    if (valid){
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
    }
}
        
module.exports = validpost