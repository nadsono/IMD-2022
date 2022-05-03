//MAIN PAKAGES
const express = require('express')
const clientesRoute = require('./routes/cliente.route')
const postsRoute = require('./routes/posts.route')

//USUAL CONSTANTS AND VARIABLES
const hostname = 'localhost';   //url host
const port = 8080;              //url port         

// Server-Express calls
const app = express()
app.use(express.json())

//confirm server is ready using a listener 
app.listen(port, hostname, () => {
    console.log(`Servidor pronto -> http://${hostname}:${port}/`)
})
console.log("restarted"); //to warn whenever the server restarts

/* --- Application Handling --- */

app.get('/', (req, res)=>{ //home
    res.send("HOME PAGE")
})
//Routes handling
app.use('/clientes', clientesRoute)
app.use('/posts', postsRoute)
