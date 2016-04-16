var postFields = {
	_id: {
		type: String,
		optional: true,
		autoform: {
			omit: true,
		}
	},
	title: {
		type: String,
		label: 'Title',
	},
	slug: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
	},
	category: {
		type: String,
		label: 'Category',
		optional: true,
		autoform: {
			options: function () {
				return Category.find().map(function (item) {
					return { label: item.name, value: item.slug };
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
	keyWord: {
		type: String,
		label: "Key Word",
		optional: true
	},
	description: {
		type: String,
		label: 'Description',
		autoform: {
			type: 'textarea',
			rows: 5
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
	categoryName: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
	},
	active: {
		type: Boolean,
		optional: true,
		autoform: {
			omit: true
		}
	},
	totalView: {
		type: Number,
		optional: true,
		autoform: {
			omit: true
		}
	},
	userId: {
		type: String,
		optional: true,
		autoform: {
			omit: true,
		}
	},
	createdAt: {
		type: Date,
		optional: true,
		autoform: {
			omit: true
		}
	},
	updatedAt: {
		type: Date,
		optional: true,
		autoform: {
			omit: true
		}
	}
};

PostsSchema = new SimpleSchema(postFields);