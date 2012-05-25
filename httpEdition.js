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