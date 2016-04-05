AutoForm.hooks({
	submitCategoryForm: {
		onSuccess: function (operation, category) {
			Router.go('singleCategory', category);
		}
	}
});