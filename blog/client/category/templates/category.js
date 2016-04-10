Template.category.events({
	'click .del-category': function (event) {
		event.preventDefault();
		Meteor.call('delCategory', this._id);
	}
});