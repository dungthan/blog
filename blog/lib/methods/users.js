Meteor.methods({
	registerUser: function(user) {
		Accounts.createUser({
			username: user.username,
			email: user.email,
			password: user.password
		});
	},
});