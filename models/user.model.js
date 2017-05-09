'use strict';

// var users = [
//   {
//     name: 'Person1',
//     age: 1
//   },{
//     name: 'Person1',
//     age: 2
//   },{
//     name: 'Person3',
//     age: 3
//   },{
//     name: 'Person4',
//     age: 4
//   },{
//     name: 'Person5',
//     age: 5
//   }
// ]
// module.exports = {
//   find: function(req,where,callback){
//     req.getConnection(function(err, conn) {
//       if (err) {
//         return next(err);
//       } else {
//         conn.query('select * from users '+where, [], function(err,result) {
//           if (err) {
//             return next(err);
//           } else {
//             callback(result);
//             // res.json(); //可以直接把结果集转化Json返回给客户端
//           }
//         });
//       }
//     });
//   }

// };