// write basic express boiler plate code
// with express.json() as middle ware


const express=require('express');

const app=express();

app.use(express.json())

// body
// title
// description

app.post("/todo",function(req,res){
    const createPayLoad = req.body
    const parsePayLoad = createTodo
})


app.get("/todos",function(req,res){
    
})

app.put("/completed",function(req,res){

})


app.listen(3000,function(){
    console.log(`Example app listening on port 3000`)
})