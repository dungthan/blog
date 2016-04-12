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