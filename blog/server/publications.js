Meteor.publish('allPosts', function() {
	return Posts.find();
});

Meteor.publish('singlePost', function(id) {
	return Posts.find(id);
});

Meteor.publish('allCategorys', function () {
	return Category.find();
});

Meteor.publish('allImages', function () {
	return Images.find();
});

Meteor.publish('singleThumbnail', function (id) {
	var post = Posts.findOne(id);
	return Thumbnail.find(post.thumbnail);
});

Meteor.publish('allThumbnails', function () {
	return Thumbnail.find();
});

Meteor.publish('listPosts', function (category) {
	return Posts.find({category: category});
});