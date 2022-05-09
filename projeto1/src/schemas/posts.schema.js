module.exports = {

    type: "object",                           
    properties: {
        titulo: {type: "string", maxLength: 100, minLength:5},
        texto: {type: "string"},
        clienteID: {type: "number"}
        //id: {type: "string"}                                     
    },
    required: ["titulo", "texto", "clienteID"],
    additionalProperties: false
}