module.exports = {

    type: "object",                           
    properties: {
        titulo: {type: "string", maxLength: 100, minLength:5},
        texto: {type: "string"},
        clienteId: {type: "integer"}
        //id: {type: "string"}                                     
    },
    required: ["titulo", "texto", "clienteId"],
    additionalProperties: false

}