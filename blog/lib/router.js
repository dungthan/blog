Router.configure({

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