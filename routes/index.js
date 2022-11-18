var express = require('express');
var router = express.Router();

//dummy messages
const messages = [
  {
    text: 'Hello',
    user: 'Todd',
    added: new Date()
  },
  {
    text: 'Howdy',
    user: 'Steve',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
