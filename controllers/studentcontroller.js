const { response } = require('express')
const studentmodel=require('../models/studentmodel')

//show the list of student
const index=(req,res,next)=>{
    studentmodel.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error'
        })
    })
}

//show single student
const show=(req,res,next)=>{
    let studentId=req.body.studentId
    studentmodel.findById(studentId)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
        message:"an error"
    })
    })
}
//added student
const store=(req,res,next)=>{
    let studentroute=new studentmodel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        company:req.body.company
    })
    studentroute.save()
    .then(response=>{
        res.json({
            message:'student added successfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'an error'
        })
    })
}

//upddate

const update=(req,res,next)=>{
    let studentId=req.body.studentId
    let updatedData={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        company:req.body.company
    }
    studentmodel.findByIdAndUpdate(studentId,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'student data updated'
        })
    })
    .catch(error=>{
        res.json({
            message:'an error'
        })
    })
}

//delete
const destroy=(req,res,next)=>{
    let studentId=req.body.studentId
    studentmodel.findOneAndRemove(studentId)
    .then(()=>{
        req.json({
            message:'student deleted'
        })
    })
    .catch(error=>{
        req.json({
            message:'an error'
        })
    })
}
module.exports={
    index,show,store,update,destroy
}
