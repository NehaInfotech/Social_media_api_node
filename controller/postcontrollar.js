const model = require('../model/postSchema')

exports.create_post = async (req, res) => {
    const data = req.body;

    try {
        const post = await model.create(data);
        req.body.image= req.file.filename;
        res.status(201).json({
            message: "Post created successfully",
            status: "succesful",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating post",
            status: "error",
            error: error.message
        })

    }
}