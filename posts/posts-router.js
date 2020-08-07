const express = require("express")
const router = express.Router()
const posts = require('../data/db')


router.get("/api/posts", (req, res)=> {
    posts.find()
    .then((posts)=> {
        res.status(201).json(posts)
    })
    .catch((error)=> {
        console.log(error)
        res.status(500).json({error: "The posts information could not be retrieved."})
    })
})




router.post("/api/posts", (req,res)=>{
    const post = req.body
    // if(!req.body.title || !req.body.contents){
    //     res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    // }

    // posts.insert(req.body)
    // .then((post) => {
    //     res.status(201).json(post)
    // })
    // .catch((error) => {
    //     console.log(error)
    //     res.status(500).json({error: "There was an error while saving the post to the database"})
    // })

    try{
        if(!req.body.title || !req.body.contents){
            res.status(400).json({errorMessage: "Please provide title and contents for the post."})
        }else{
            res.status(201).json(post)
        }
    }catch(error){
        res.status(500).json({error: "There was an error while saving the post to the database"})
    }
})


module.exports = router