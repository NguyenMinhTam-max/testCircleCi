const express = require('express');
const actorModel = require('../models/actor.model')
const router = express.Router();
const moment = require('moment');
router.get('/', async function(req, res){
    const rows = await actorModel.select();
    res.json({
        message: rows
    });
})


router.get('/detail/:id', async function(req, res){
    const id = req.params.id;
    const rows = await actorModel.selectByID(id);
    res.json({
        message: rows
    });
})

router.post('/insert', async function(req, res){
    console.log(req.body)
    var objectActor = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        last_update: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    await actorModel.insert(objectActor)
    res.json({
        message :"insert successfully!"
    })
})

router.post('/update/:id', async function(req, res){
    const id = +req.params.id || 0;
    if(id == 0){
        res.json({
            message:"cannot find record to update"
        })
    }
    //const body
    await actorModel.update(id ,req.body);
    res.json({
        message: " update successfully!!"
    })
})


router.get('/delete/:id', async function(req, res){
    const id = +req.params.id || 0;
    if(id == 0){
        res.json({
                message : "No record deleted"
        })
    }
    await actorModel.delete(id);

    res.json({
        message : "Record deleted"
    })
})

module.exports = router;