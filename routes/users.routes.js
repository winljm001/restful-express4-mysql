'use strict';

var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.controller');

// // 该路由使用的中间件
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// 定义
router.get('/users',usersController.list);
// 定义
router.post('/users/login',usersController.verifyUser);

module.exports = router;

/**
 * Module dependencies.
 */

// module.exports = function(app) {
//   // User Routes
//   app.route('/users')
//     .get(usersController.list);
//   //.post(users.create);
//   // app.route('/api/users/:userId')
//   //   .get(users.read)
//   //   .put(users.update)
//   //   .delete(users.delete);
//   app.route('/users/login')
//     .post(usersController.verifyUser);
// };