const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=> {
    const allComments = await Comment.findAll()
    console.log(allComments)
    res.json(allComments)
})

router.post('/', withAuth, async (req,res)=> {
    try {
        const userData = await User.findByPk(req.session.user_id,{attributes:['name']})
       
        const newComment = await Comment.create(
            {
                comment: req.body.comment,
                post_id: req.body.post_id,
                name: userData.dataValues.name
        
            }
        );

        
        console.log(userData,"{{{{{{{{{{{{{{{{{{{{{{{")

        console.log(newComment, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

          res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
