Router.configure({

});

Router.route('/', {
	name: 'home',
	controller: 'MainPageController'
});

Router.route('/new', {
	name: 'newPost',
	controller: 'BaseController'
});