const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

router.get('/blog', async (req,res) => {
    try{
        const user = await Blog.find({topic: req.query.search})
        res.status(200).json({
            status: "Success",
            user
        })
    } catch(err){
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})

router.post('/blog', async (req,res) => {
    try{
        const user = await Blog.create(req.body);
        res.status(200).json({
            status: "Success",
            user
        })
    } catch(err){
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})

router.put('/blog/:id', async (req,res) => {
    try{
        const user = await Blog.update({_id: req.params.id}, req.body);
        res.status(200).json({
            status: "success",
            user
        })
    } catch(err){
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})

router.delete('/blog/:id', async (req, res) => {
    try{
        const user = await Blog.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: "success",
            user
        })
    } catch(err){
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})

module.exports = router;