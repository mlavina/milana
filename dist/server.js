var express = require('express');

var app = express();

app.use('/', express.static(__dirname));

var port = Number(process.env.PORT || 8000);
app.listen(port, function() {
  console.log("listening on " + port);
});
