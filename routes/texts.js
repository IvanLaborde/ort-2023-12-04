var express = require('express');
var router = express.Router();
var texts = require('../src/texts');

router.get('/:id', async function(req, res, next) {
    try{
        const texto = await texts.getTextoByID(req.params.id);
        res.status(200).json(texto)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message: "error"})
    }
});

module.exports = router;