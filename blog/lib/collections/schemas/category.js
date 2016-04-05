var categoryFields = {
	_id: {
		type: String,
		optional: true,
		autoform: {
			omit: true,
		}
	},
	categorySlug: {
		type: String,
		optional: true,
		autoform: {
			omit: true,
		}
	},
	name: {
		type: String,
		label: 'Thể  loại'
	},

	group: {
		type: String,
		label: 'Nhóm',
		allowedValues: ['php' , 'meteor', 'orther'],
		autoform: {
			options: function () {
				return _.map(['php' , 'meteor', 'orther'], function (item) {
					return {label: item, value: item};
				}); 
			}
		}
	},
	userId: {
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
			omit: true,
		}
	}
};

CategorySchema = new SimpleSchema(categoryFields);