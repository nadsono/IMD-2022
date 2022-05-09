//library ajv for validation
const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require("ajv-formats")
addFormats(ajv)

//schema import
const clienteSchema = require('../schemas/clientes.schema')

function validCliente(req, res, next){
    const cliente = req.body
    const validate = ajv.compile(clienteSchema)
    const valid = validate(cliente)
    if (valid){
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
    }
}

module.exports = validCliente