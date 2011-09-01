var net = require('net');

if(process.argv[2] && process.argv[3]){
  var appName = process.argv[2];
  var action = process.argv[3];
  var command;
  switch(action){
    case "start":
    case "restart":
    case "stop":
    case "status":
      command = action + " " + appName + "\n";
      break;
    case "stdout":
    case "stderr":
      var line = process.argv[4] || 10;
      command = action + " " + appName + " " + process.argv[4] + "\n";
      break;
    default:
    console.log("error: undefined command! Please enter the right command!");
  }

  var socket = new net.Socket();

  socket.connect(1128);

  console.log("sending command...");
  socket.write(command);
  socket.on('data', function(data){
    data = ""+data;
    if(action != "stdout" && action != "stderr")
    data = eval('('+data+')');
    if(data.status == "error"){
      console.log("error: " + data.msg);
    }
    else{
      if(data.msg)
      console.log(data.msg);
      else
      console.log(data);
    }
    //console.log(data.status);
    socket.destroy();
  });
}
else{
  console.log("Error: incorrect format");
  console.log("Please enter: node socketEdition.js [appName] [action]");
}
