/*
const Ajv = require("ajv")
const ajv = new Ajv()
const addFormats = require("ajv-formats")
addFormats(ajv)
*/
//const schema = {
    module.exports = {
        type: "object",                           
        properties: {
            nome: {type: "string"},
            email: {type: "string", format: "email"},
            id: {type: "string"}                                     
        },
        required: ["nome", "email"],
        additionalProperties: false
    }
    
    //const validate = ajv.compile(schema); //compilação
    
    /*const data = {
        nome: "Belarmino",
        id: "uuid aleatorio"
      }
    */
    
    //const valid = validate(data) //retorna valor booleano
    //if (!valid) console.log(validate.errors)