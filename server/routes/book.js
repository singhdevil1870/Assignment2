/*let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const book = require('../models/book');

// connect to our Book Model
let Book = require('../models/book');

/* GET Route for the Book List page - READ OPeration */
//router.get('/', bookController.displayBookList);


/* GET Route for the displaying add page - create opreation*/
//router.get('/add', bookController.displayAddPage);

/* GET Route for processing the add page - create opreation*/
//router.post('/add', bookController.processAddPage);


/* GET Route for the displaying edit page - update opreation*/
/*router.get('/edit/:id', (req, res, next) => {
 let id = req.params.id;

Book.findById(id, (err, bookToEdit)=>{

    if(err){
        console.log(err);
        res.end(err);
    }

    else{
        // show the edit view
        res.render("book/edit", {title: 'Edit Book', book: bookToEdit})
    }

});

});*/

//router.get("/edit/:id", bookController.displayEditPage);



/* GET Route for processing the edit page - update opreation*/
/*router.post('/edit/:id', (req, res, next) => {

    let id = req.params.id

    let updatebook = Book({
        "id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price


    });
 Book.updateOne({_id: id}, updatebook, (err) => {

   
    if(err){
        console.log(err);
        res.end(err);
    }

    else{
        //refresh the book list
        res.redirect("/book-list");
    }


 });




});*/

//router.post("/edit/:id", bookController.processEditPage);



/* GET to perform deletion - Delete opreation*/
//router.get('/delete/:id', bookController.deletePage);


//module.exports = router;


let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

// connect to our Book Model
//let Book = require("../models/book")

// connect to our Book Model
//let Book = require("../models/book");

let bookController = require("../controllers/book");


// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
      return res.redirect("/login");
    }
    next();
  }

/* GET Route for the Book List page - READ OPeration */
router.get("/", bookController.displayBookList);

/* GET Route for displaying Add page - Create OPeration */
router.get("/add", requireAuth, bookController.addpage);

/* POST Route for processing Add page - Create OPeration */
router.post("/add", requireAuth, bookController.addprocesspage);

/* GET Route for displaying Edit page -UPDATE OPeration */
router.get("/edit/:id", requireAuth, bookController.displayeditpage);

/*POST Route for processing Edit page - UPDATE OPeration */
router.post("/edit/:id", requireAuth, bookController.processingeditpage);

/* GET to perform book deletion -Delete OPeration */
router.get("/delete/:id", requireAuth, bookController.deletepage);
module.exports = router;