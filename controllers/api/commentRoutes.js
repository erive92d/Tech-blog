const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=> {
    const allComments = await Comment.findAll()
    console.log(allComments)
    res.json(allComments)
})

router.post('/', withAuth, async (req,res)=> {
    // console.log(req.body,"^^^^^^^^^^^^^^^")
    try {
        const newComment = await Comment.create(
            {
                comment: req.body.comment,
                post_id: req.body.post_id
            }
        );
        console.log(newComment, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

          res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
