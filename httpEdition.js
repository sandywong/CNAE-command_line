var http = require('http');
var appName = process.argv[2];
var url = "";

switch(process.argv[3]){
  case "start":
    url = "/app/" + appName + "/run";
    break;
  case "stop":
    url = "/app/" + appName + "/stop";
    break;
  case "status":
    url = "/app/" + appName;
  default:
    console.log("default");
    break;
  }


console.log(url);

var options = {
  host: '127.0.0.1',
  port: 1127,
  path: url,
  method: 'post'
};

var req = http.request(options, function(res){
  console.log("got response:" + res.statusCode);
  
  console.log("headers:" + JSON.stringify(res.headers));
  
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    console.log("body:" + chunk);
  });
  res.on('end', function() {
    console.log('end');
  });
  res.on('error',function(err) {
    console.log('res error', err);
  });
}).on('error', function(e){
  console.log("got error:" + e.message);
});

req.end();

Var data = file.read(“file.data”);
//等待io返回
doSomethingWithData(data);

File.read(“file.data”, function(data){
    doSomethingAfterRead(data);
});
doSomethingOnReading();


var net = require(“net”);
net.createServer(function(stream){
    stream.on(‘connect’, function(){
        stream.write(“Welcome!\r\n”);
});
stream.on(‘data’, function(data){
        stream.write(data + “\r\n”);
});
}).listen(8080);

var weibo =  require('./node_modules/weibo');
app.use(weibo.oauth({
    login_path: '/login', //指定登录路径
    logout_path: '/logout', //指定登出路径
    blogtype_field: 'type', //微博类型的变量名(除新浪外，node-weibo还支持其他类型的微博，如腾讯微博、twitter等)
    callback_path: '/' //登录登出后回调的路径
}));



var user = db.collection(‘user’);
//根据id查找信息
user.find({id: id}).toArray(function(err, data){ 
if(err){
        //错误处理
    }
    //操作data
});
//保存data信息
user.save(data, function(err){
    if(err){
        //错误处理
    }
});
//根据id更新信息
db.update({id: id}, {$set: newData}, function(err){
    if(err){
        //错误处理
    }
});



var m = {
    roomId: roomId,
    type: type, //start, over
    timestamp: (new Date()).getTime()
};



  var session = {
    id: id,
    site: site,
    name: name,
    timestamp: new Date(),
    poke: function(){
      session.timestamp = new Date();
    },
    destroy: function(){
      delete sessions[roomId][session.site];
      messageMgr.appendMessage(roomId, session.site, "part", null);
    }
};
