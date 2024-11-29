

    const jwt =require('jsonwebtoken')
    const Emodal=require('../model/user')
    
    exports.tokensecure=async(req,res,next)=>{
        try {
            const token =req.headers.authorization
            if(!token) throw new Error('Attach Token')
                const tokenverify =jwt.verify(token,'surat')
            const userverify=await Emodal.findById(tokenverify.id)
            if(!userverify) throw new Error('user not Found')
    
                next()
    
        } catch (error) {
            res.status(404).json({
                status:'fail',
                Message:error.Message
            })
        }
    }
