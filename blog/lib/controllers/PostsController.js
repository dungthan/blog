NewPostController = BackEndController.extend({
	template: 'newPost',
	waitOn: function () {
		return [Meteor.subscribe('allCategorys'), Meteor.subscribe('allImages')];
	},
	onBeforeAction: function () {
		if (!Meteor.user()) {

			if (Meteor.loggingIn())
				this.render('loadingTemplate');
			else 
				this.render('accessDenied');

		} else {
			this.next();
		}
	}
});

PostCategoryController = BaseController.extend({
	template: 'postsList',
	findOptions: function() {
		return { sort: { createdAt: -1 } };
	},

	waitOn: function() {
		return [
			Meteor.subscribe('listPosts', this.params.slug),
			Meteor.subscribe('allThumbnails')
		];
	},
	
	data: function() {
		console.log(this.params._id);
		return { posts: Posts.find({}, this.findOptions())};
	}
});

EditPostController = BackEndController.extend({
	template: 'editPost',
	waitOn: function () {
		return [
			Meteor.subscribe('allCategorys'), 
			Meteor.subscribe('allImages'),
			Meteor.subscribe('singlePost', this.params._id)
		];
	},
	data: function () {
		return Posts.findOne(this.params._id);
	},
	onBeforeAction: function () {
		if (!Meteor.user()) {

			if (Meteor.loggingIn())
				this.render('loadingTemplate');
			else 
				this.render('accessDenied');

		} else {
			this.next();
		}
	}
});

ManagerPostController = BackEndController.extend({
	template: 'managerPost',
	findOptions: function() {
		return { sort: { createdAt: -1 } };
	},
	waitOn: function () {
		return [
			Meteor.subscribe('allPosts', this.findOptions())
		];
	},
	data: function () {
		return { posts: Posts.find({}, this.findOptions()) };
	},
	onBeforeAction: function () {
		if (!Meteor.user()) {

			if (Meteor.loggingIn())
				this.render('loadingTemplate');
			else 
				this.render('accessDenied');

		} else {
			this.next();
		}
	}
});