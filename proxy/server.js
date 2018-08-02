const express = require('express');
//const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3005;
const request = require('request');

//app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/shoes/shoe', function(req, res){
    const options = {
      url: 'http://localhost:3004/shoes/shoe'
    }
    request(options, (error, response, body) => {
      res.send(body);
    });
})

app.post('/shoes/shoe', function(req, res){
    const options = {
      url: 'http://localhost:3004/shoes/shoe'
    }
    request(options, (error, response, body) => {
      res.send(body);
    });
})

app.get('/flyknit', function(req, res){
    const options = {
      url: 'http://localhost:3003/flyknit'
    }
    request(options, (error, response, body) => {
      res.send(body);
    });
})

app.get('/description/air_force_1', function(req, res){
  const options = {
    url: 'http://localhost:3001/description/air_force_1'
  }
  request(options, (error, response, body) => {
    res.send(body);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
