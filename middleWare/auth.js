//second method for token generate


const jwt= require('jsonwebtoken')
const model = require ('../model/user')
    // const jwt =require('jsonwebtoken')
    // const Emodal=require('../model/user')


    exports.token_secure= async (req,res,next)=>{
        try {
            const token= req.headers.authorization;
            if(!token) throw new Error('attach token')
                const token_verify= jwt.verify(token,'secretkey')
            const userverify= await model.findOne({email:req.body.email})
            if (!userverify) throw new Error ("user not found")
                req.user=userverify
            next()

        } catch (error) {
            res.status(401).json({
                message:error.message,
                status:"fail"
                })
        }
    }
    // exports.tokensecure=async(req,res,next)=>{
    //     try {
    //         const token =req.headers.authorization
    //         if(!token) throw new Error('Attach Token')
    //             const tokenverify =jwt.verify(token,'surat')
    //         const userverify=await Emodal.findById(tokenverify.id)
    //         if(!userverify) throw new Error('user not Found')
    
    //             next()
    
    //     } catch (error) {
    //         res.status(404).json({
    //             status:'fail',
    //             Message:error.Message
    //         })
    //     }
    // }
