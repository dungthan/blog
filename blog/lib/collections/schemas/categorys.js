var categoryFields = {
	_id: {
		type: String,
		optional: true,
		autoform: {
			omit: true,
		}
	},
	name: {
		type: String,
		label: 'Name'
	},
	slug: {
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
			omit: true
		}
	},
	postTotal: {
		type: Number,
		optional: true,
		autoform: {
			omit: true
		}
	},
	createdAt: {
		type: Date,
		optional: true,
		autoform: {
			omit: true,
		}
	}
};

CategorySchema = new SimpleSchema(categoryFields);