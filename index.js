const express = require('express')
const cors =require ('cors')
const app = express()
app.use(cors({
    origin:"*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
app.use(express.json())
const port = process.env.PORT||4000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
app.post('/',(req,res)=>{
    console.log(req.body);
    const {x,y,operation_type}=req.body
    
    
    const Enum ={
    addition : (...args)=>{
        let sum=0;
        args.forEach((arg)=>{
        sum+=arg
    })
    return sum           
    },
    subtraction : (...args)=>{
    return args[0]-args[1]
    },
    multiplication:(...args)=>{
        let result=1;
        args.forEach((arg)=>{
        result*=arg
    })
    return result
    }
    
}
if(
    operation_type.includes("addition")||
    operation_type.includes("add")||
    operation_type.includes("sum")
    )
{
        let numb=operation_type.match(/\d/g)
        console.log(numb) 
        if(numb){
            console.log("operation is a word problem");
            let arr = operation_type.split(" ") 
            let nums = arr.filter((elem)=>{
                return !isNaN(elem)
            })
            let finalArray = nums.map((elem)=>{
                return  parseFloat(elem)
            })
            res.json({
                slackUsername:"deverence",
                operation_type:"addition",
                result:Enum.addition(...finalArray)})
                return
            }
            else{
            res.json({
                slackUsername:"deverence",
                operation_type:"addition",
                result:Enum.addition(x,y)})
                return
        }          
    }
if(
    operation_type.includes("subtraction")||
    operation_type.includes("subtract")||
    operation_type.includes("minus")||
    operation_type.includes("difference")
    )
{
        let numb=operation_type.match(/\d/g)
        console.log(numb) 
        if(numb){
            console.log("operation is a word problem");
            let arr = operation_type.split(" ") 
            let nums = arr.filter((elem)=>{
                return !isNaN(elem)
            })
            let finalArray = nums.map((elem)=>{
                return  parseFloat(elem)
            })
            res.json({
                slackUsername:"deverence",
                operation_type:"subtraction",
                result:Enum.subtraction(...finalArray)})
                return
            }
            else{
            res.json({
                slackUsername:"deverence",
                operation_type:"subtraction",
                result:Enum.subtraction(x,y)})
                return
        }          
    }
if(
    operation_type.includes("multiply")||
    operation_type.includes("product")||
    operation_type.includes("multiplication")
    )
{
        let numb=operation_type.match(/\d/g)
        console.log(numb) 
        if(numb){
            console.log("operation is a word problem");
            let arr = operation_type.split(" ") 
            let nums = arr.filter((elem)=>{
                return !isNaN(elem)
            })
            let finalArray = nums.map((elem)=>{
                return  parseFloat(elem)
            })
            res.json({
                slackUsername:"deverence",
                operation_type:"multiplication",
                result:Enum.multiplication(...finalArray)})
                return
            }
            else{
            res.json({
                slackUsername:"deverence",
                operation_type:"multiplication",
                result:Enum.multiplication(x,y)})
                return
        }          
    }
})
