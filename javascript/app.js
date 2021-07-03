
const express = require("express");
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
app.use('/public', express.static(path.join(__dirname, '/public')))
var numCPUs = require('os').cpus().length;
var cluster = require('cluster');

app.set('view engine', 'ejs');

//views in yerini belirtiyoruz, aksi takdirde direk views e bakar
app.set('views', path.join(__dirname, '/app_server/views'));
app.use(ejsLayouts);
//kullaniciyz aciyoruz bu komutla:
//const app = express();
require('./app_server/routers/routeManager')(app);
const port = 4000;

// app.listen(port, function() {
//   console.log("Server is running on Port: " + port);
// });


if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    // Create a worker
    cluster.fork();
  }
} else {
  // Workers share the TCP connection in this server
  // All workers use this port
  app.listen(port, function() {
    console.log("Server is running on Port: " + port);
  });
}

