Router.configure({
	loadingTemplate: 'spinner',
});

Router.route('/', {
	name: 'home',
	controller: 'MainPageController'
});

Router.route('/101146', {
	name: 'backend',
	controller: 'BackEndController'
});

Router.route('/new-post', {
	name: 'newPost',
	controller: 'NewPostController'
});

Router.route('/edit-post/:_id', {
	name: 'editPost',
	controller: 'EditPostController'
});

Router.route('/post-manager', {
	name: 'postManage',
	controller: 'ManagerPostController'
});

Router.route('/category', {
	name: 'category',
	controller: 'CategoryController',
});

Router.route('/login', {
	name: 'login',
	controller: 'BackEndController',
	onBeforeAction: function () {
		if (!Meteor.user())
			this.next();
		else 
			Router.go('backend');
	}
});

Router.route('/register', {
	name: 'register',
	controller: 'BackEndController',
	onBeforeAction: function () {
		if (!Meteor.user())
			this.next();
		else 
			Router.go('backend');
	}
});

Router.route('/:_id', {
	name: 'singlePost',
	controller: 'SinglePageController'
});