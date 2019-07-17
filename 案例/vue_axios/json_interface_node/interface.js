const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next(); 
    }
});

app.get('/', function(req, res) {
    var obj = {
        'a': 1,
        'b': 2,
        'c': 3
    }
    res.json(obj)
    res.end(JSON.stringify(obj))
})
app.post('/', function(req, res) {
    var obj = {
        'a': 1,
        'b': 2,
        'c': 3
    }
    res.json(obj)
    res.end(JSON.stringify(obj))
})
app.post('/add',function(req, res) {

    console.log(req.body)
})
 

app.listen(50001,function() {
    console.log('server running')
})

// var http = require('http');



// var data = {key: 'value', hello: 'world'};


// var srv = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   res.end(JSON.stringify(data));
// });


// srv.listen(50001, function() {  
//   console.log('listening on localhost:8080');
// });