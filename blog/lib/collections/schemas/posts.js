var postFields = {
	title: {
		type: String,
		label: 'Title',
	},
	category: {
		type: String,
		label: 'Category',
		autoform: {
			options: function () {
				return Category.find().map(function (item) {
					return { label: item.name, value: item._id };
				});
			}
		}

	},
	thumbnail: {
		type: String,
		label: 'Thumbnail',
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images',
				accept: 'image/*',
				previewTemplate: 'prevThumbnail'
			}
		}
	},
	body: {
		type: String,
		label: 'Content',
		autoform: {
			//type: 'froala',
			afFieldInput: {
				type: 'summernote',
				class: 'editor',
				settings: {
					height: 300,
				}
      			//inlineMode: false,
      			//buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'formatBlock', 'blockStyle', 'inlineStyle', 'align', 'insertOrderedList', 'insertUnorderedList', 'outdent', 'indent', 'selectAll', 'createLink', 'insertImage', 'insertVideo', 'table', 'undo', 'redo', 'html', 'insertHorizontalRule', 'uploadFile', 'removeFormat', 'fullscreen'],

			}
		}
	},
	tag: {
		type: String,
		label: 'Tag',
		optional: true,
	},
	_id: {
		type: String,
		optional: true,
		autoform: {
			omit: true,
		}
	},
	userId: {
		type: String,
		optional: true,
		autoform: {
			omit: true,
		}
	},
	author: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
	},
	createdAt: {
		type: Date,
		optional: true,
		autoform: {
			omit: true
		}
	}
};

PostsSchema = new SimpleSchema(postFields);