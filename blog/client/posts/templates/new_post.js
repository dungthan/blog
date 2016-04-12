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

Template.newPost.onRendered(function () {
	var template = this;
	$('#post-body').summernote({
		height: 300,
		toolbar:[
	        ['style', ['style']],
			['font', ['bold', 'italic', 'underline', 'clear']],
			['fontname', ['fontname']],
			['color', ['color']],
			['para', ['ul', 'ol', 'paragraph']],
			['height', ['height']],
			['table', ['table']],
			['insert', ['link', 'picture', 'hr']],
			['view', ['fullscreen', 'codeview']],
			['help', ['help']],
	        ['highlight', ['highlight']],
	    ],
		onImageUpload: function (files) {
			Images.insert(files[0], function (err, fileObj) {
				template.autorun(function (c) {
					fileObj = Images.findOne(fileObj._id);
					var url = fileObj.url();
					if (url) {
						$("#post-body").summernote("insertImage", fileObj.url(), "Image Title"); 
						c.stop();
					}
				});
			});
		}
	});
});