Meteor.methods({
	submitCategory: function (category) {

		var user = Meteor.user();

		if (!user)
			throw new Meteor.Error(401, 'You need to login first');

		var paramsCategory = {
			userId: user._id,
			createdAt: new Date()
		};

		_.extend(category, paramsCategory);

		category._id = Category.insert(category);

		return category;
	},
	delCategory: function (id) {
		Category.remove(id);
	}
});