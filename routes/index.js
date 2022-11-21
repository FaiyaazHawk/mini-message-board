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

/* GET form page */

router.get('/new', function (req, res, next) {
  res.render('form')
})

/* POST form data to messages*/

router.post('/new', function(req, res, next) {
  const author = req.body.author;
  const message = req.body.message;
  messages.push({text: message, user: author, added: new Date()});
  res.redirect('/');
})

module.exports = router;
