//Install express server
const path = require('path');
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname+'/dist/app-demo'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/app-demo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
