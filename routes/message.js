const router = require('express').Router();
const Message = require('../model/message');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { saveValidation } = require('../validacao');

router.post('/', async(req, res)=>{
    const {error} = saveValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        await User.find({_id: req.body.user});
    }catch(err){
        console.log(err)
        res.status(400).send('Usuário não registrado!');
    }

    const message = new Message({
        text: req.body.text,
        user: req.body.user
    });
    try{
        await message.save();
        res.send({ message: message._id });
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
});

router.get('/:userId', async(req, res)=>{
    const userId = req.params.userId;
    try{
        await Message.find({user: userId}).then(function (messages) {
            res.send(messages);
        });
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
});

router.delete('/:messageId', async(req, res)=>{
    const messageId = req.params.messageId;
    try{
        const deletedMessage = await Message.findOneAndDelete({_id: messageId});
        res.send({ messageId: deletedMessage._id, text: deletedMessage.text, user: deletedMessage.user });
    }catch(err){
        console.log(err)
        res.status(400).send('Mensagem não existente no BD para ser deletada!');
    }
});

router.put('/', async(req, res)=>{
    const message = new Message({
        _id: req.body._id,
        text: req.body.text,
        user: req.body.user
    });
    try{
        const updatedMessage = await Message.findOneAndUpdate({_id: message._id}, {text: message.text});
        res.send({ messageId: updatedMessage._id, text: updatedMessage.text, user: updatedMessage.user });
    }catch(err){
        console.log(err)
        res.status(400).send('Mensagem não existente no BD para ser alterada!');
    }
});

module.exports = router;