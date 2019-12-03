var express = require('express');
var router = express.Router();
var data=require('../data.json');var List=data.chapterList;
var mysql=require('mysql');
var dbconfig = require('../config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
con.connect();
router.get('/', function(req, res, next) {
  res.render('login', { title:'吾宠后台管理系统' });
});
router.get('/system', function(req, res, next) {
    con.query("select * from manager",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("system",{manager:result});
        // console.log(result);
      }
    });
});
router.get('/dongtai', function(req, res, next) {
  con.query("select * from dynamic",function(err,result){
    if(err){
      console.log(err);
    }
    else{
     
      res.render("dongtaiM",{dynamic:result});
      // console.log(result);
    }
  });
});
router.get('/zhuce', function(req, res, next) {
  res.render('zhuceM', {List:List});
});
router.post('/add',function(req,res,next){
    var mName=req.body.user;
    var mRealName= req.body.username;
    var mPwd=req.body.pwd;
    var mSex=req.body.mSex;
    var mTel=req.body.mTel;
    var mEmail=req.body.mEmail;
    con.query("insert into manager(mId,mName,mRealName,mSex,mTel,mEmail,mPwd) values(?,?,?,?,?,?,?)",[parseInt((Math.random()*1000)),mName,mRealName,mSex,mTel,mEmail,mPwd],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/system");
      }
    });
  });
  router.get('/del',function(req,res,next){
      var mId=req.query.mId;
      con.query("delete from manager where mId=?",[mId],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result);
        res.redirect("/system");
        }
      });
    });
    router.get('/dela',function(req,res,next){
      var activeId=req.query.activeId;
      con.query("delete from active where activeId=?",[activeId],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result);
        res.redirect("/activity");
        }
      });
    });    
    router.get('/deld',function(req,res,next){
      var dynamicId=req.query.dynamicId;
      con.query("delete from dynamic where dynamicId=?",[dynamicId],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result);
        res.redirect("/dongtai");
        }
      });
    });
    router.get('/delu',function(req,res,next){
      var userId=req.query.userId;
      con.query("delete from userinfo where userId=?",[userId],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result);
        res.redirect("/userguanli");
        }
      });
    });
router.get('/activity', function(req, res, next) {
  con.query("select * from active",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("activityM",{active:result});
      // console.log(result);
    }
  });
});

router.get('/userguanli', function(req, res, next) {
  con.query("select * from userinfo",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("userGuanli",{userinfo:result});
      // console.log(result);
    }
  });
});
router.get('/listt', function(req, res, next) {
  res.render('listt', {title:'吾宠后台管理系统'});
  // res.render('list', {List:List});
});
router.get('/listp', function(req, res, next) {
  con.query("select * from petinfo",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("listp",{petinfo:result});
      // console.log(result);
    }
  });
});
router.get('/listb', function(req, res, next) {
  con.query("select * from signup",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("listb",{signup:result});
      // console.log(result);
    }
  });
});
router.get('/listd', function(req, res, next) {
  con.query("select * from clockin",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("listd",{clockin:result});
      // console.log(result);
    }
  });
});
var bodyParser=require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// /* POST 登录验证 && GET login page. */
router.get('/login', function(req, res, next) {
  var response = {
    "username":req.query.username,
    "pwd":req.query.pwd,
};
var selectSQL = "select mRealName,mPwd from manager where mRealName = '"+req.query.username+"' and mPwd = '"+req.query.pwd+"'";
   
  con.query(selectSQL,function(err,result){
    if(err){
      console.log(err);
    }
    else if(result==''){
      res.json({ret_code : 1, ret_msg : '用户名密码错误'});// 若登录失败
    }
    else{
        res.redirect('/system');
    }
  });
});

module.exports = router;
