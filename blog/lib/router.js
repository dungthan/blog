Router.configure({
	loadingTemplate: 'spinner',
});

Router.route('/', {
	name: 'home',
	controller: 'MainPageController'
});

Router.route('/new-post', {
	name: 'newPost',
	controller: 'BaseController'
});

Router.route('/category', {
	name: 'category',
	controller: 'BaseController',
});

Router.route('/:_id', {
	name: 'singlePost',
	controller: 'SinglePageController'
});

Router.onBeforeAction(function () {

	if (!Meteor.user()) {

		if (Meteor.loggingIn()) {
			this.render('loadingTemplate');
		} else {
			this.render('accessDenied');
		}

	} else {
		this.next();
	}

}, { only: ['newPost', 'category'] });