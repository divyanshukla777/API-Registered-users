var express = require('express');
var router = express.Router();
var db= require('../modules/db');

router.get('/', function(req,res,next){
  res.render('index');
});

router.post('/reg',function(req,res,next){
  post={
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    registeredAt:new Date()
  }
  db.query(`INSERT INTO users SET ?`,post,(err,result)=>{
    if(err) throw err;

  })
 res.redirect('/users');
});

router.get('/users',function(req,res,next){
  db.query(`SELECT * FROM users`,(err,result)=>{
    if(err) throw err;
    res.render('users',{users:result});
  });
});

router.get('/users/:username',function(req,res,next){
  console.log(req.params.username);
  db.query(`SELECT * FROM users WHERE username=?`,req.params.username,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.render('profile',{user:result[0]});
  })
});
module.exports=router