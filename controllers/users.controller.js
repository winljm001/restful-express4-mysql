'use strict';

/**
 * Module dependencies.
 */
var userModel = require('../models/user.model.js');

/**
 * List of users
 */
exports.list = function(req, res) {
	req.getConnection(function(err, conn) {
        if (err) {
            return next(err);
        } else {
            conn.query('select * from users', [], function(err,result) {
                if (err) {
                    return next(err);
                } else {
                    res.json(result); //可以直接把结果集转化Json返回给客户端
                }
            });
        }
    });
};

/**
 * 验证user
 */
exports.verifyUser = function(req, res) {
    var data = {};
    data['id']=req.body.id;
    data['password']=req.body.password;
    req.getConnection(function(err, conn) {
        if (err) {
            return next(err);
        } else {
            conn.query('select * from users where ?', data, function(err,result) {
                if (err) {
                    return next(err);
                } else {
                    res.json(result); //可以直接把结果集转化Json返回给客户端
                }
            });
        }
    });
};


/**
 * Add users
 */
// exports.add = function(req, res) {
// 	req.getConnection(function(err, conn) {
//         if (err) {
//             return next(err);
//         } else {
//         	var data = {
// 	            name    : input.name,
// 	            address : input.address,
// 	            email   : input.email,
// 	            phone   : input.phone 
	        
// 	        };
//             conn.query('INSERT INTO users set ? ', data, function(err,result) {
//                 if (err) {
//                     return next(err);
//                 } else {
//                     res.json(result); //可以直接把结果集转化Json返回给客户端
//                 }
//             });
//         }
//     });
// };