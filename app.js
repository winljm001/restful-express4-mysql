// Base Setup
// ====================================================================================================

// call the package we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

// configure app to use middleware bodyParser()
// let us get the data from a POST
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

// set db mysql
var mysql = require('mysql'), 
	myConnection = require('express-myconnection'),
	dbOptions = {
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: 3306,
	database: 'crm'
};

app.use(myConnection(mysql, dbOptions, 'request')); 
//作为中间件来使用
// single。 创建单数据库应用实例，连接从不会关闭，万一连接因故障断掉，它还会重新连接。
// pool。   基于应用程序实例创建连接池，并且对每一个请求从连接池里提供连接，连接在每次response会自动释放返回到连接池里去。
// request。 针对每个request创建新的连接， 并且在response结束时会自动关闭。


// set our port
var port = process.env.PORT || 8888;

// base route for API
// ====================================================================================================

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var userRoutes=require('./routes/users.routes.js');
app.use('/api', userRoutes);

// start the api server
// ====================================================================================================
app.listen(port);
console.log('server start on port ' + port);