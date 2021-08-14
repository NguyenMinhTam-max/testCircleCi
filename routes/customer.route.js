const express = require('express');
const customerModel = require('../models/customer.model')
const router = express.Router();

router.get('/', async function (req, res) {
    const rows = await customerModel.select();
    res.json({
        message: rows
    });
})


router.get('/detail/:id', async function (req, res) {
    const id = req.params.id;
    const rows = await customerModel.selectByID(id);
    res.json({
        message: rows
    });
})

router.post('/insert', async function (req, res) {
    console.log(req.body)
    var objectCustomer = req.body;
    await customerModel.insert(objectCustomer)
    res.json({
        message: "insert successfully!"
    })
})

router.post('/update/:id', async function (req, res) {
    const id = +req.params.id || 0;
    if(id == 0){
        res.json(
            {
                message: "no record to update"
            }
        )
    }
    await customerModel.update(id, req.body);
    res.json({
        message: "successfully!"
    });
})


router.get('/delete/:id', async function (req, res) {
    const id = +req.params.id || 0;
    if (id == 0) {
        res.json({
            message: "No record deleted"
        })
    }
    await customerModel.delete(id);

    res.json({
        message: "Record deleted"
    })
})

module.exports = router;