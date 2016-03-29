let express = require('express');
let router = express.Router();
let BlogPost = require('../models/BlogPost')

let loggedIn = require('../lib/middleware/logged-in');
// let NotificationService = require('../lib/notification')([
// 	{
// 		pattern: 'forgot-password/:id',
// 		handler: 'forgot-password'
// 	}
// ], path.join(config.rootPath, 'views', 'notifications'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express / React Template'
	});
});

router.get('/dashboard', loggedIn, function(req, res, next) {
	res.render('dashboard', {
		title: 'User Dashboard'
	});
});

router.get('/post/create', function(req, res, next) {
	res.render('post/create');
});

router.post('/post/create', function(req, res, next) {
	console.log(req.body);
	let post = new BlogPost({
			title: req.body.title,
			content: req.body.content,
			userId: req.user.id
	});

	post.save()
	.then(post => {
		res.redirect('/dashboard');
	})
	.catch(err => {
		console.log('Something bad happened');
	});
});

module.exports = router;
