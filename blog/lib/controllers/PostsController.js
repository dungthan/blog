NewPostController = BackEndController.extend({
	template: 'newPost',
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