var express = require('express');
let app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname +'/dist'));
