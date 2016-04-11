Meteor.methods({
	submitPost: function (post) {

		var user = Meteor.user();

		if (!user)
			throw new Meteor.Error(401, 'You need to login first');

		var paramsPost = {
			userId: user._id,
			author: 'Author',
			createdAt: new Date()
		}

		_.extend(post, paramsPost);

		post._id = Posts.insert(post);

		return post;

	},
	removeImage: function (id) {
		Images.remove(id);
	}
});