var express = require('express');
var router = express.Router();
const RestaurantModel = require('../models/restaurantModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const restaurantData = await RestaurantModel.getAll();
    console.log('restaurantsData', restaurantData)
    
    res.render('template', {
        locals: {
        title: 'Restaurants Page',
        data: restaurantData
    },
        partials: {
        partial: 'partial-restaurants'
    }
});
});

module.exports = router;
