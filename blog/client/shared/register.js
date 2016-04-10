AutoForm.hooks({
	'registerForm': {
		onSuccess: function (operation, user) {
			Router.go('backend');
		}
	}
});