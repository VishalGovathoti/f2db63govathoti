var car = require('../models/car');
// List of all cars
exports.car_list = function(req, res) {
    res.send('NOT IMPLEMENTED: car list');
};
// for a specific car. 
exports.car_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await car.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
exports.car_list = async function(req, res) {

    try{

        thecars = await car.find();

        res.send(thecars);

    }

    catch(err){

        res.status(500);

        res.send(`{"error": ${err}}`);

    }  

};
// Handle car create on POST.
exports.car_create_post = async function(req, res) {
    console.log(req.body)
    let document = new car();
    document.Model = req.body.Model;
    document.yearofmanufacturing = req.body.yearofmanufacturing;
    document.color = req.body.color;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle car delete form on DELETE.
exports.car_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id);
};

//Handle car update form on PUT. 
exports.car_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await car.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Model)  
               toUpdate.Model = req.body.Model; 
        if(req.body.yearofmanufacturing) toUpdate.yearofmanufacturing = req.body.yearofmanufacturing; 
        if(req.body.color) toUpdate.color = req.body.color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS
// Handle a show all view

exports.car_view_all_Page = async function(req, res) {
    try{
        thecars = await car.find();
        res.render('car', { title: 'car Search Results', results: thecars});
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};