var express = require('express');
var router = express.Router();
var data=require('../data.json.js');
var List=data.chapterList;
router.get('/', function(req, res, next) {
  res.render('login', { title:'吾宠后台管理系统' });
});
// router.get('/login', function(req, res, next) {
//   res.render('logi', {title:'吾宠后台管理系统'});
// });
router.get('/dongtai', function(req, res, next) {
  res.render('dongtaiM', {List:List});
});
router.get('/zhuce', function(req, res, next) {
  res.render('zhuceM', {List:List});
});
router.get('/activity', function(req, res, next) {
  res.render('activityM', {List:List});
});
router.get('/system', function(req, res, next) {
  res.render('system', {List:List});
});
router.get('/userguanli', function(req, res, next) {
  res.render('userGuanli', {List:List});
});
router.get('/listt', function(req, res, next) {
  res.render('listt', {title:'吾宠后台管理系统'});
  // res.render('list', {List:List});
});
router.get('/listp', function(req, res, next) {
  res.render('listp', {List:List});
});
router.get('/listb', function(req, res, next) {
  res.render('listb', {List:List});
});
router.get('/listd', function(req, res, next) {
  res.render('listd', {List:List});
});
// var express = require('express');
// var router = express.Router();
var bodyParser=require('body-parser');
// var data=require('../data.json');
// var List=data.chapterList;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// /* GET login page. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
// /* GET list page. */
// router.get('/list',function(req,res,next){
//   res.render('list', {List:List});
// })
// /* POST 登录验证 && GET login page. */
router.post('/login', function(req, res, next) {
  var username=req.body.username;
  var pwd=req.body.pwd;
  if(username == data.users[0].username && pwd == data.users[0].password){
    res.render('system', {title:'吾宠后台管理系统',List:List});
  }
  else{
    res.json({ret_code : 1, ret_msg : '用户名密码错误'});// 若登录失败
  }
});

module.exports = router;
