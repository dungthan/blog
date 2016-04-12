var postFields = {
	title: {
		type: String,
		label: 'Title',
	},
	category: {
		type: String,
		label: 'Category',
		optional: true,
		autoform: {
			options: function () {
				return Category.find().map(function (item) {
					return { label: item.name, value: item.categorySlug };
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
				collection: 'Thumbnail',
				accept: 'image/*',
				previewTemplate: 'prevThumbnail'
			}
		}
	},
	body: {
		type: String,
		label: 'Content',
		autoform: {
			type: 'textarea',
			rows: 5,
			id: 'post-body',
		}
	},
	// tag: {
	// 	type: String,
	// 	label: 'Tag',
	// 	optional: true,
	// },
	categoryName: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
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