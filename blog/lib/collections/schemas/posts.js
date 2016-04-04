var postFields = {
	title: {
		type: String,
		label: 'Title',
	},
	category: {
		type: String,
		label: 'Category',
	},
	thumbnail: {
		type: String,
		label: 'Thumbnail'
	},
	body: {
		type: String,
		label: 'Content',
		autoform: {
			type: 'textarea',
			rows: 5,
		}
	},
	tag: {
		type: String,
		label: 'Tag',
		optional: true,
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