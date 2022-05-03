//MAIN PAKAGES
const express = require("express");
const produtoRota = require("./routes/produtos.route")

//server url infos
const hostname = 'localhost';   //url host
const port = 3030;              //url port 

// Server-Express calls
const app = express();
app.use(express.json());

/* --- Application Handling --- */

app.get("/", (req, res) => {
  res.json({ msg: "HOME PAGE" });
});

//route treatment
app.use("/produtos", produtoRota)


//confirm server is ready using a listener 
app.listen(port, hostname, () => {
  console.log(`Servidor pronto -> http://${hostname}:${port}/`)
})
console.log("restarted"); //to warn whenever the server restarts
