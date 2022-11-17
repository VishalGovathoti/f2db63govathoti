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
// Handle car delete on DELETE. 
exports.car_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await car.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.car_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await car.findById( req.query.id) 
        res.render('cardetail',  
{ title: 'car Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a car. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.car_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('carcreate', { title: 'car Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a car. 
// query provides the id 
exports.car_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await car.findById(req.query.id) 
        res.render('carupdate', { title: 'car Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.car_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await car.findById(req.query.id) 
        res.render('cardelete', { title: 'car Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 