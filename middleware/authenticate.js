const jwt=require('jsonwebtoken')
const authenticate=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1]
        const decode=jwt.verify(token,'secretValue')
    }
    catch{
        res.json({
            message:'authentication Failed'
        })
    }

}
module.exports=authenticate