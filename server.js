var express = require('express');
var path = require('path');

var app = express();

var CWD = process.cwd();

var DIST = path.join(CWD, 'dist');

app.use('/', express.static(DIST));

var port = Number(process.env.PORT || 8000);
app.listen(port, function() {
  console.log("listening on " + port);
});
