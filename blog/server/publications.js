Meteor.publish('allPosts', function() {
	return Posts.find();
});

Meteor.publish('singlePost', function(id) {
	return Posts.find(id);
});

Meteor.publish('allCategorys', function () {
	return Category.find();
});