Meteor.methods({
	submitPost: function (post) {

		var user = Meteor.user();

		if (!user)
			throw new Meteor.Error(401, 'You need to login first');

		var category = Category.findOne({categorySlug: post.category});

		var paramsPost = {
			userId: user._id,
			author: 'Author',
			createdAt: new Date(),
			categoryName: category.name
		}

		_.extend(post, paramsPost);

		post._id = Posts.insert(post);

		return post;

	},
	removeImage: function (id) {
		Thumbnail.remove(id);
	},
	insertImage: function (file) {
		Images.insert(file);
	}
});