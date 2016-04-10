Template.login.events({
	'submit form': function(event, template) {
		event.preventDefault();
		var username = $('[name=username]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(username, password, function(error) {
			if (error) {
				template.$('#error').html('Tên đăng nhập hoặc mật khẩu không chính xác');
			} else {
				Router.go('backend');
			}
		});
	}
});

Template.adminLayout.events({
	'click .logout': function(event) {
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	}
});