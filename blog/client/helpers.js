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