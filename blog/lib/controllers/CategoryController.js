CategoryController = BackEndController.extend({
	template: 'category',
	findOptions: function () {
		return { sort: { createdAt: -1 } };
	},
	waitOn: function () {
		return Meteor.subscribe('allCategorys', this.findOptions());
	},
	data: function() {
		return { categorys: Category.find({}, this.findOptions()) };
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