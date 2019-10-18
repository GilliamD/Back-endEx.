const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('template', {
    locals: {
      title: 'Welcome!'
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
