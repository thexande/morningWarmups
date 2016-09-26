var express = require('express');
var router = express.Router();
history = []

/* GET home page. */
router.get('/:item', function(req, res, next) {
  if(req.params.item == "clear") {
    history = []
    res.clearCookie('history')
    res.send("cleared")
  } else {
    history.push(req.params.item)
  }
  res.cookie('history', history.sort())
  res.send(req.cookies)
});

module.exports = router;
