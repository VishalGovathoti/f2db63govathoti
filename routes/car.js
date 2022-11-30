var express = require('express');
const car_controlers=require('../controllers/car');
var router = express.Router();
var car_controller = require('../controllers/car');
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
router.get('/', secured, car_controller.car_view_all_Page);
router.get('/detail',secured, car_controller.car_view_one_Page);
router.get('/create',secured, car_controller.car_create_Page);
router.get('/update',secured, car_controller.car_update_Page);
router.get('/delete',secured, car_controller.car_delete_Page);

/* GET update car page */ 
//router.get('/update', secured, car_controller.car_update_Page); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('car', { title: 'Search Results car' });
});


module.exports = router;