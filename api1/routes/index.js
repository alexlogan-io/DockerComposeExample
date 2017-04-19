var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('index', {result: 'Index', container: process.env.HOSTNAME});
    //res.send('Currently using the container ' + process.env.HOSTNAME);
});

router.get('/api1/:id', function(req,res){
    var id = req.params.id;

    if(id == 1){
        res.render('index', {result: 'apples', container: process.env.HOSTNAME});
    }else if(id == 2){
        res.render('index', {result: 'Oranges', container: process.env.HOSTNAME});
    }else if(id == 3){
        res.render('index', {result: 'Papaya', container: process.env.HOSTNAME});
    }else if(id == 4){
        res.render('index', {result: 'Mangos', container: process.env.HOSTNAME});
    }else if(id == 5){
        res.render('index', {result: 'Plums (with red on the inside)', container: process.env.HOSTNAME});
    }else{
        res.render('index', {result: 'Tesco Everyday Value citrus Fruit (scurvy prevention)', container: process.env.HOSTNAME});
    }
});

module.exports = router;
