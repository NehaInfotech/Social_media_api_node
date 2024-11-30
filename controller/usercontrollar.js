const model = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.Signup = async (req, res) => {
    try {
        const register = await model.create(req.body)
        req.body.password = await bcrypt.hash(req.body.password, 10)
        req.body.profilePicture = req.file.filename;
        res.status(201).json({
            message: "User created successfully",
            status: 'signup sucssessfully !! welcome to our website',
            data: register
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            status: 'not sucsessful'
        })
    }
}

exports.Login = async (req, res) => {
    try {
        const logindata = await model.findOne({ email: req.body.email });
        if (!logindata) throw new Error("Invalid email");

        const verypassword = await bcrypt.compare(req.body.password, logindata.password);
        if (!verypassword) throw new Error('Invalid password');

        const token = jwt.sign({id:logindata._id},'verify')

        // const token = jwt.sign({ id: logindata._id }, 'verify');
        res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            data: logindata,
            token
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }

}