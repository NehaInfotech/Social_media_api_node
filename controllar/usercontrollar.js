const model = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
exports.Signup= async(req,res)=>{
    const data = req.body
    try {
        const created= await model.create(data)
        res.status(201).json({
            message: "User created successfully",
            status: 'created',
            data : data
        })
    } catch (error) {
        res.status(404).json({
            message: "User not created",
            status:'not sucsessful'
        })
    }
}
