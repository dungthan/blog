var userFields = {
	username: {
		type: String,
		unique: true,
		regEx: /^[a-zA-Z0-9_.]{4,32}$/,
		min: 4,
		max: 32,
		label: 'Tên đăng nhập'
	},
	email: {
		type: String,
		label: 'Email',
		unique: true,
		regEx: SimpleSchema.RegEx.Email
	},
	password: {
		type: String,
		label: 'Mật khẩu',
	},
	confirmPassword: {
		type: String,
		label: 'Nhắc lại mật khẩu',
		custom: function () {
			if (this.value !== this.field('password').value)
				return "noMatch";
		}
	}
};

UsersSchema = new SimpleSchema(userFields);

UsersSchema.messages({
	noMatch: 'Nhắc lại mật khẩu chưa chính xác',
	required: "[label] là bắt buộc",
	minString: "[label] phải có ít nhất [min] ký tự",
	maxString: "[label] không thể vượt quá [max] ký tự",
	regEx: [
		{ exp: /^[a-zA-Z0-9_.]{4,32}$/, msg: "[label] không hợp lệ. Các ký tự hợp lệ 'a-z', 'A-Z', '0-9', '_', '.'" },
		{ exp: SimpleSchema.RegEx.Email, msg: "[label] phải là e-mail hợp lệ" },
	]
});