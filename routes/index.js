var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', (req, res) => {
  res.json({
    data: 'PING',
    message: 'success',
    status: 200
  })
})

router.post('/test', (req, res) => {
  res.json({
    data: 'success live and well',
    message: 'success',
    status: 200
  })
})


module.exports = router;
