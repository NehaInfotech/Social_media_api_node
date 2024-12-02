// const model = require('../model/postSchema')

// exports.create_post = async (req, res) => {
//     const data = req.body;
//     console.log("Authenticated User:", req.user);
//     console.log("Request Body:", req.body);
//     try {
//         const post = await model.create(data);
//         req.body.image = req.file.filename;
//         req.body.user = req.user._id;  
//         res.status(201).json({
//             message: "Post created successfully",
//             status: "succesful",
//             data: post
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Error creating post",
//             status: "error",
//             error: error.message
//         })

//     }
// }
const Post = require('../model/postSchema');

exports.create_post = async (req, res) => {
    try {
        console.log("Authenticated User:", req.user);
        console.log("Request Body:", req.body);

        // Ensure image and user are correctly attached
        const newPost = {
            user: req.user._id, // Attach authenticated user's ID
            image: req.file?.filename || '', // Attach uploaded file's filename
        };

        // Create the post
        const post = await Post.create(newPost);

        res.status(201).json({
            message: 'Post created successfully',
            status: 'successful',
            data: post,
        });
    } catch (error) {
        console.error("Error Creating Post:", error.message);
        res.status(500).json({
            message: 'Error creating post',
            status: 'error',
            error: error.message,
        });
    }
};
