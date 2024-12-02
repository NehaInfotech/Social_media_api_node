// //second method for token generate


// const jwt= require('jsonwebtoken')
// const model = require ('../model/user')
//     // const jwt =require('jsonwebtoken')
//     // const Emodal=require('../model/user')


//     exports.token_secure= async (req,res,next)=>{
//         try {
//             const token =req.headers.authorization
//                     if(!token) throw new Error('Attach Token')
//                         const tokenverify =jwt.verify(token,'surat')
//                     const userverify=await model.findById(tokenverify.id)
//                     if(!userverify) throw new Error('user not Found')
            
//             next()

//         } catch (error) {
//             res.status(401).json({
//                 message:error.message,
//                 status:"fail"
//                 })
//         }
//     }
//     // exports.tokensecure=async(req,res,next)=>{
//     //     try {
//     //         const token =req.headers.authorization
//     //         if(!token) throw new Error('Attach Token')
//     //             const tokenverify =jwt.verify(token,'surat')
//     //         const userverify=await Emodal.findById(tokenverify.id)
//     //         if(!userverify) throw new Error('user not Found')
    
//     //             next()
    
//     //     } catch (error) {
//     //         res.status(404).json({
//     //             status:'fail',
//     //             Message:error.Message
//     //         })
//     //     }
//     // }
const jwt = require('jsonwebtoken');
const User = require('../model/user'); // Import the user model

exports.token_secure = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Ensure Authorization header exists and starts with "Bearer"
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error('Attach a valid token');
        }

        // Extract the token
        const token = authHeader.split(' ')[1];
        console.log("Token:", token);

        // Verify the token
        const token_verify = jwt.verify(token, 'secretkey'); // Replace 'secretkey' with your secret key
        console.log("Token Payload:", token_verify);

        // Find the user by ID in the token payload
        const userverify = await User.findById(token_verify.id);
        if (!userverify) {
            throw new Error('User not found');
        }

        // Attach the authenticated user to the request
        req.user = userverify;

        next();
    } catch (error) {
        res.status(401).json({
            message: error.message,
            status: 'fail',
        });
    }
};
