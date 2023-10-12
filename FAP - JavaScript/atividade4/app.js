const express = require('express');

const app = express();

const conn = require('./db/conn')
app.use(express.json());

app.listen(3003, () => {console.log("RODANDO DA PORTA 3003")});
console.log()

app.get('/', async (req,res) => {
    if(conn){ 
       res.send("<h1>Conexão Bem-sucedida</h1>")
     }else{
        res.send("<h1>Conexão malsucedida</h1>");
     }
    
})