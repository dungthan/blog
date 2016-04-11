AutoForm.hooks({
	submitPostForm: {
		onSuccess: function(operation, post) {
			Router.go('singlePost', post);
		}
	}
});

Template.newPost.events({
	'click .js-af-remove-file': function (event, template) {
		event.preventDefault();
		var _id = template.find('[class="js-value"]').value;
		Meteor.call('removeImage', _id, function (error, result) {});
	}
});