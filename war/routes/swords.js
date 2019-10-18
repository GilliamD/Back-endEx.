const express = require('express');
const router = express.Router();
const SwordsModel = require('../models/swordsModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const swordsData = await SwordsModel.getAll();
    console.log('swordsData', swordsData)
    
    res.render('template', {
        locals: {
        title: 'Swords Page',
        data: swordsData
    },
        partials: {
        partial: 'partial-swords'
    }
});
});

module.exports = router;