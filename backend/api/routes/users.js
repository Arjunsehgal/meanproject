var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
const bcrypt = require('bcrypt');



function checkEmail(req, res, next) {
  var email = req.body.Email;
  var checkexitemail = userModel.findOne({ email: email });
  checkexitemail.exec((err, data) => {
    if (err) throw err;
    if (data) {
      return res.status(200).json({
        err: "Email Already Exits",
        results: data
      });
    }
    next();
  });
}



/* GET users listing. */
router.get('/', function (req, res, next) {
  var userDetails = new userModel({
    name: 'Arjun Sehgal',
    email: 'abc@gmail.com',
    password: 'Jammu@123',

  });
  userDetails.save(function (err, req1) {
    if (err) throw err;
    res.render('index', { title: 'User Data Inserted' });
  })
});




router.post('/register', checkEmail, function (req, res, next) {

  bcrypt.hash(req.body.Password, 10, function (err, hash) {
    if (err) {
      res.status(400).json({
        msg: "Something Wrong, Try Later!",
        results: err
      });
    }
    else {
      var userDetails = new userModel({
        name: req.body.Name,
        email: req.body.Email,
        password: hash,
        role:'Author'
      });
      userDetails.save().then(doc => {
        res.status(201).json({
          msg: "User Inserted Successfully",
          results: doc
        });
      })
        .catch(err => {
          res.json(err);
        });
    }
  });
});


router.post("/login", function (req, res, next) {
  var email = req.body.Email;
  // var role = req.body.role;
  userModel.find({ email: email })  //,role:role
    .exec()
    .then(user => {
      if (user.length < 1) {
        res.status(200).json({
          msg: "Entered Email Doesnot Exist!",
          UserData: '',
          status: 'error'
        });
      } else {
        bcrypt.compare(req.body.Password, user[0].password, function (err, result) {
          if (err) {
            res.json({
              msg: "Entered Password Doesnot Matched!",
              UserData: '',
              status: 'error'
            });
          }
          if (result) {
            res.status(200).json({
              msg: "User Login Successfully",
              UserData: user,
              status: 'success'
            });
          } else {
            res.json({
              msg: "Either Email or Password is incorrect!",
              UserData: '',
              status: 'error'
            });
          }
        });

      }
    })
    .catch(err => {
      res.json({
        error: err
      });
    })

});


module.exports = router;
