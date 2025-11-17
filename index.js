const express = require("express")
const routesItem = require("./routes/items")
const app = express()

app.use(express.json())
function endpointRes(req,res){
    res.send("welkom")
}
app.get("/", endpointRes)
app.listen(3000,() => console.log("sever gestart op poort 3000"))