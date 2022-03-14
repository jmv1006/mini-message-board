var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'I wonder how I could be able to create a web app like this uing React...',
    user: 'JSProgrammer',
    added: new Date()
  },
  {
    text: 'Mark my words. The Los Angeles Dodgers will be the 2022 World Series Champions, with Freddie Freeman as the WS MVP.',
    user: 'baseballfan2022',
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', (req, res, next) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser
  console.log(new Date())

  messages.push({text: messageText, user: messageUser, added: new Date()});

  res.redirect('/');
});

router.get('/', (req, res, next) => {
  res.redirect('/new')
});

module.exports = router;
