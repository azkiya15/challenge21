var express = require('express');
var router = express.Router();
const path = require("path");

/* GET home page. */
module.exports = function(pool) {
  router.get('/', function(req, res, next) {
    let resData = []

    pool.query('SELECT * FROM bread', (err, result) => {
      resData = result.rows
      
      pool.query('SELECT * FROM bread WHERE id = 2', (err, result2) => {
        resData2 = result2.rows
        res.render('index', { model: resData, model2: resData2 });

      })
      
    })
    
    
  });

  return router
}


// module.exports = router;
