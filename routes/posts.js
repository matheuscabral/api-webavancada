const router = require('express').Router();
const veirfy = require('./verifyToken');

router.get('/', verify,(req,res) =>{
    res.json({
        posts: {
            title: 'meu primeiro post',
            description: 'qualquer coisa'
        }
    })
});

module.exports = router;