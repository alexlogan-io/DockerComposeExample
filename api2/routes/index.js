var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {result: 'Index', container: process.env.HOSTNAME});
});

router.get('/api2/:id', function(req,res){
  var id = req.params.id;

  if(id == 1){
    res.render('index', {result: 'Manchester United', container: process.env.HOSTNAME});
  }else if(id == 2){
    res.render('index', {result: '"Manchester City"', container: process.env.HOSTNAME});
  }else if(id == 3){
    res.render('index', {result: 'Liverpool', container: process.env.HOSTNAME});
  }else if(id == 4){
    res.render('index', {result: 'The Arsenal', container: process.env.HOSTNAME});
  }else if(id == 5){
    res.render('index', {result: 'Cambridge United', container: process.env.HOSTNAME});
  }else{
    res.render('index', {result: 'The team you support who are also bad', container: process.env.HOSTNAME});
  }
});

module.exports = router;
