Template.register.helpers({
	userForm: function() {
		return UsersSchema;
	}
});

Template.login.helpers({
	userLoginForm: function() {
		return UsersLoginSchema;
	}
});

Template.categorys.created = function () {
	Tracker.autorun(function () {
		Meteor.subscribe('allCategorys');
	});
}

Template.categorys.helpers({
	categorys: function () {
		return Category.find();
	}
});

Template.postItem.helpers({
	'pathToSinglePost': function () {
		return {
			category: this.category,
			slug: this.slug,
			_id: this._id
		};
	}
});

Template.mainLayout.events({
	'click #btn-login': function () {
		if (Meteor.user()) {
			Router.go('backend');
		} else {
			Router.go('login');
		}
		return false;
	}
});

Template.mainLayout.onRendered(function () { 
 //    $('body').niceScroll({
	// 	scrollspeed: 120,
 //    	mousescrollstep: 60,
	// 	bouncescroll: true,
	// 	touchbehavior: true,
	// 	hwacceleration: true,
	// 	smoothscroll: true,
	// 	bouncescroll: true,
	// 	grabcursorenabled: true
	// });
});