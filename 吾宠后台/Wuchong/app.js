var express = require('express');
var router = express.Router();
var data=require('./data.json');
var List=data.chapterList;
var mysql=require('mysql');
var dbconfig = require('./config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
con.connect();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/list');
var listtRouter = require('./routes/list');
var listpRouter = require('./routes/index');
var listbRouter = require('./routes/index');
var listdRouter = require('./routes/index');
var listeRouter = require('./routes/index');
var dongtaiRouter = require('./routes/index');
var zhuceRouter = require('./routes/index');
var showPlayRouter = require('./routes/index');
var editMRouter = require('./routes/index');
var editDRouter = require('./routes/index');
var editARouter = require('./routes/index');
var editURouter = require('./routes/index');
var activityRouter = require('./routes/index');
var systemRouter = require('./routes/index');
var userguanRouter = require('./routes/index');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list', listRouter);
app.use('/listt', listtRouter);
app.use('/listp', listpRouter);
app.use('/listb', listbRouter);
app.use('/listd', listdRouter);
app.use('/liste', listeRouter);
app.use('/zhuce', zhuceRouter);
app.use('/showPlay',showPlayRouter);
app.use('/editM', editMRouter);
app.use('/editD', editDRouter);
app.use('/editA', editARouter);
app.use('/editU', editURouter);
app.use('/activity', activityRouter);
app.use('/dongtai', dongtaiRouter);
app.use('/system', systemRouter);
app.use('/userguanli', userguanRouter);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });






app.get('/active',function(err,res){
  con.query('select * from active where acCity in (select cityName from city)',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      else{
        res.json(result);
        // console.log(result[0].activeId);
        // for(var i=0;i<result.length;i++){
        //   app.get(`/active/ac${result[i]}`,function(err,res){
        //     console.log("a");
        //     con.query('select * from active where activeId=?',[result[i].activeId],function(err,result){
        //         if(err){
        //             console.log('[SELECT ERROR] - ', err.message);
        //             return;
        //         }
        //         res.json(result); 
        //     }); 
        //   }) ;
        // }
      }
      console.log(result)
  }); 
}) ;

app.get('/city',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from city',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 
app.get('/active/ac1',function(err,res){
  con.query('select * from active where activeId=?',['1'],function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) ;
app.get('/active/ac2',function(err,res){
  con.query('select * from active where activeId=?',['2'],function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) ;


// app.get('/active/ac0',function(err,res){
//   con.query('select * from active where activeId=?',["1"],function(err,result){
//       if(err){
//           console.log('[SELECT ERROR] - ', err.message);
//           return;
//       }
//       res.json(result); 
//   }); 
// }) ;


app.get('/clockin',function(err,res){
  con.query('select * from clockin',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/dynamic',function(err,res){
  con.query('select * from dynamic',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/manager',function(err,res){
  con.query('select * from manager',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/petinfo',function(err,res){
  con.query('select * from petinfo',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/guanzhu',function(req,res){
  con.query('select * from guanzhu',function(err,result){
    if(err){
      console.log('[SELECT ERROR]-',err.message);
      return;
    }
    res.json(result);
  });
});

app.get('/signup',function(err,res){
  con.query('select * from signup',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/userinfo',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from userinfo',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
          
      }
      console.log(typeof(result));
      res.json(result); 

  }); 
}) 

app.get('/denglu',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from denglu',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 
app.get('/editpet',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from editpet',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
})
app.get('/dingwei',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from dingwei',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
})
app.get('/clockbianji',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from clockbianji',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 


app.post('/userinfo1',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    userId:"wuchong"+parseInt(Math.random()*1000000),
    userName:data.userName,
    userTel:data.userTel,
    userPassword:data.userPassword,
    userAvatar:""
  }
  con.query('insert into userinfo(userId,userName,userTel,userPassword,userAvatar) values(?,?,?,?,?)',[insertData.userId,insertData.userName,insertData.userTel,insertData.userPassword,insertData.userAvatar],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})

app.post('/clockin',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    clockId:"wuchong"+parseInt(Math.random()*1000000),
    clockName:data.clockName,
    clockNum:data.clockNum,
    clockTime:data.clockTime,
    userId:data.userId,
    clockImg:data.clockImg,
    clockCycle:data.clockCycle,
    
  }
  con.query('insert into clockin(clockId,clockName,clockNum,clockTime,userId,clockImg,clockCycle) values(?,?,?,?,?,?,?)',[insertData.clockId,insertData.clockName,insertData.clockNum,insertData.clockTime,insertData.userId,insertData.clockImg,insertData.clockCycle],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})


app.post('/petinfo1',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    petId:"pet"+parseInt(Math.random()*1000000),
    petName:data.petName,
    petSex:data.petSex,
    petAge:data.petAge,
    userId:"1",
    petImg:"",
    userId:data.userId,
    petImg:data.petImg
  }
  con.query('insert into petinfo(petId,petName,petSex,petAge,userId,petImg) values(?,?,?,?,?,?)',[insertData.petId,insertData.petName,insertData.petSex,insertData.petAge,insertData.userId,insertData.petImg],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})

app.post('/denglu',(req,res)=>{
  let data=req.body;
  console.log(data);
  // let insertData = {
  //   userId:data.userId,
  // }
  con.query("select * from denglu",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      if(result==[]){
        con.query('insert into denglu(userId) values(?)',[data.userId],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
      }
      else{
        con.query('update denglu set userId=?',[data.userId],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result); 
            }
              
        })
      }
    }
  })
  
})
app.post('/editpet',(req,res)=>{
  let data=req.body;
  console.log(data);
  con.query("select * from editpet",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      if(result==[]){
        con.query('insert into editpet(petId) values(?)',[data.petId],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
      }
      else{
        con.query('update editpet set petId=?',[data.petId],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result); 
            }
              
        })
      }
    }
  })
  
})
app.post('/editpet1',(req,res)=>{
  let data=req.body;
  console.log(data);
  con.query('update petinfo set petImg=?,petName=?,petSex=?,petAge=? where petId=?',[data.petImg,data.petName,data.petSex,data.petAge,data.editPetId],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
app.post('/delPet',(req,res)=>{
  let data=req.body;
  console.log(data);
  con.query('delete from petinfo where petId=?',[data.editPetId],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
app.post('/dingwei',(req,res)=>{
  let data=req.body;
  console.log(data);
  // let insertData = {
  //   userId:data.userId,
  // }
  con.query("select * from dingwei",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      if(result==[]){
        con.query('insert into dingwei(acCity) values(?)',[data.acCity],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
      }
      else{
        con.query('update dingwei set acCity=?',[data.acCity],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result); 
            }
              
        })
      }
    }
  })
  
})

app.post('/dynamic',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    dynamicId:"dynamic"+parseInt(Math.random()*1000000),
    dynamicImg:data.dynamicImg,
    dynamicContent:data.dynamicContent,
    likeNum:1,
    userId:data.userId,
    acCity:data.acCity
  }
  con.query('insert into dynamic(dynamicId,dynamicImg,dynamicContent,likeNum,userId,acCity) values(?,?,?,?,?,?)',[insertData.dynamicId,insertData.dynamicImg,insertData.dynamicContent,insertData.likeNum,insertData.userId,insertData.acCity],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
app.post('/signup1',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    signId:"active"+parseInt(Math.random()*1000000),
    signName:data.signName,
    signTel:data.signTel,
    spetName:data.spetName,
    spetAge:data.spetAge,
    spetKind:data.spetKind,
    activeId:data.activeId,
    userId:data.userId
  }
  con.query('insert into signup(signId,signName,signTel,spetName,spetAge,spetKind,activeId,userId) values(?,?,?,?,?,?,?,?)'
  ,[insertData.signId,insertData.signName,insertData.signTel,insertData.spetName,insertData.spetAge
  ,insertData.spetKind,insertData.activeId,insertData.userId],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
app.post('/city',(req,res)=>{
  let data=req.body;
  console.log(data);
  // let insertData = {
  //   userId:data.userId,
  // }
  con.query("select * from city",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      if(result==[]){
        con.query('insert into city(cityName) values(?)',[data.cityName],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
      }
      else{
        con.query('update city set cityName=?',[data.cityName],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result); 
            }
              
        })
      }
    }
  })
  
})
app.post('/userinfo2',(req,res)=>{
  let data=req.body;
  console.log(data);
  con.query('update userinfo set userAvatar=? where userId=?',[data.userAvatar,data.userId],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
app.post('/userinfo3',(req,res)=>{
  let data=req.body;
  console.log(data);
  con.query('update userinfo set userName=? where userId=?',[data.userName,data.userId],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})
app.post('/delDynamic',(req,res)=>{
  let data=req.body;
  console.log(data.dynamicId);
  con.query("SET FOREIGN_KEY_CHECKS=0");
  con.query('delete from dynamic where dynamicId=?',[data.dynamicId],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})

app.post('/clockbianji',(req,res)=>{
  let data=req.body;
  console.log(data);
  // let insertData = {
  //   userId:data.userId,
  // }
  con.query("select * from clockbianji",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      if(result==[]){
        con.query('insert into clockbianji(clockId) values(?)',[data.clockId],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result);
            }
               
        })
      }
      else{
        con.query('update clockbianji set clockId=?',[data.clockId],function(err,result){
          if(err){
                console.log(err);
            }else{
              console.log(result);
              res.json(result); 
            }
              
        })
      }
    }
  })
  
})


app.post('/guanzhu',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    clockId:"WuChong"+parseInt(Math.random()*1000),
    Id:data.Id,
    guanzhuId:data.guanzhuId,
    userId:data.userId,
    
  }
  con.query('insert into guanzhu(Id,guanzhuId,userId) values(?,?,?)',[insertData.Id,insertData.guanzhuId,insertData.userId],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})


app.post('/delguanzhu',(req,res)=>{
  let data=req.body;
  console.log(data);
  let insertData = {
    Id:data.Id,
    guanzhuId:data.guanzhuId,
    userId:data.userId,
    
  }
  con.query('delete from guanzhu where Id=?',[insertData.Id],function(err,result){
    if(err){
          console.log(err);
      }
        console.log(result);
        res.json(result); 
  })
})





// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("地址为 http://%s:%s", host, port);
})

module.exports = app;