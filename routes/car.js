var express = require('express');
const car_controlers=require('../controllers/car');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('car', { title: 'Search Results car' });
});


module.exports = router;