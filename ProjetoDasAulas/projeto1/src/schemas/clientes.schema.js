//const schema = {
module.exports = {
    type: "object",                           
    properties: {
        nome: {type: "string"},
        email: {type: "string", format: "email"}
        //id: {type: "string"}                                     
    },
    required: ["nome", "email"],
    additionalProperties: false
}

//const validate = ajv.compile(schema); //compilação
//const valid = validate(req.body) //retorna valor booleano
//if (!valid) console.log(validate.errors)