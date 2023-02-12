const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=> {
    const allComments = await Comment.findAll()
    console.log(allComments)
    res.json(allComments)
})

router.post('/', async (req,res)=> {
    console.log(req.body)
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
          });

          res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
