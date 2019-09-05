var express = require('express');
var router = express.Router();

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
//var dbname = "ratingsService" ;

/* GET home page. */
router.get('/', function(req, res, next) {
  es.writeHead(400, {'Content-type': 'application/json'})
    res.end(JSON.stringify({error : "Invalid URI. Try POST /ratings OR GET /ratings/{schoolId}"}));
});

router.post('/ratings',function(req , res , next){    
    var schoolId =  req.body.schoolId;
    result = {
      id : schoolId,
      status  : "Rating Inserted successfully."
    }
    res.writeHead(201, {'Content-type': 'application/json'})
    res.end(JSON.stringify(result))
});

router.get('/ratings/:schoolId', function(req, res, next) {
  var schoolId =  req.params.schoolId;

  /*MongoClient.connect(url ,  { useNewUrlParser: true } , function (err, db) {
    var dbo = db.db(dbname);
    if (err) {
      res.writeHead(500, {'Content-type': 'application/json'})
      res.end(JSON.stringify({error: 'could not connect to ratings database'}))
    } else {
      dbo.collection('schoolRatings').find({} , function (err, data) {
        if (err) {
          res.writeHead(500, {'Content-type': 'application/json'})
          res.end(JSON.stringify({error: 'could not load ratings from database'}))
        } else {
          console.log(data);
          var avgRating = 0;
          if(ratings.length > 0){
            ratings.array.forEach(element => {
              avgRating = avgRating + element.rating;
            });

            avgRating = avgRating/ratings.length;
          }

          var result = {
            id: schoolId,
            rating: avgRating
          }
          res.writeHead(200, {'Content-type': 'application/json'})
          res.end(JSON.stringify(result))
        }
        // close DB once done:
        db.close()
      })
    } */

    var result = {
      id: schoolId,
      rating: (Math.random() * 10).toFixed(2)
    };

    res.writeHead(200, {'Content-type': 'application/json'})
          res.end(JSON.stringify(result))
  })


  router.get('/health-check' , function(req , res , next ){
    res.json({status: 'UP'});
  });


module.exports = router;
