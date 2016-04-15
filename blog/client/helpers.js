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

Template.body.onRendered(function () { 
    $('body').niceScroll({
		scrollspeed: 120,
    	mousescrollstep: 60,
		bouncescroll: true,
		touchbehavior: true,
		hwacceleration: true,
		smoothscroll: true,
		bouncescroll: true,
		grabcursorenabled: true
	});
});