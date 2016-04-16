Meteor.methods({
	submitCategory: function (category) {

		var user = Meteor.user();

		if (!user)
			throw new Meteor.Error(401, 'You need to login first');

		var paramsCategory = {
			userId: user._id,
			createdAt: new Date(),
			slug: url_slug(category.name)
		};

		_.extend(category, paramsCategory);

		category._id = Category.insert(category);

		return category;
	},
	delCategory: function (id) {
		Category.remove(id);
	}
});

function url_slug(s, opt) {
    s = String(s);
    opt = Object(opt);

    var defaults = {
        'delimiter': '-',
        'limit': undefined,
        'lowercase': true,
        'replacements': {},
        'transliterate': (typeof(XRegExp) === 'undefined') ? true : false
    };

    // Merge options
    for (var k in defaults) {
        if (!opt.hasOwnProperty(k)) {
            opt[k] = defaults[k];
        }
    }

    var char_map = {
        // Latin
        'À': 'A', 'Á': 'A', 'Ã': 'A', 'Ả': 'A', 'Ạ': 'A',
        'Ă': 'A', 'Ắ': 'A', 'Ằ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
    	'Â': 'A', 'Ầ': 'A', 'Ấ': 'A', 'Ẫ': 'A', 'Ẩ': 'A', 'Ậ': 'A',
        'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C', 
       	'È': 'E', 'É': 'E', 'Ẽ': 'E', 'Ẻ': 'E', 'Ẹ': 'E',
       	'Ê': 'E', 'Ề': 'E', 'Ế': 'E', 'Ễ': 'E', 'Ể': 'E', 'Ệ': 'E',
       	'Ì': 'I', 'Í': 'I', 'Ĩ': 'I', 'Ỉ': 'I', 'Ị': 'I',
        'Ë': 'E', 'Î': 'I', 'Ï': 'I',
        'Ò': 'O', 'Ó': 'O', 'Õ': 'O', 'Ỏ': 'O', 'Ọ': 'O',
        'Ô': 'O', 'Ồ': 'O', 'Ố': 'O', 'Ỗ': 'O', 'Ộ': 'O', 'Ổ': 'O',
        'Ơ': 'O', 'Ờ': 'O', 'Ớ': 'O', 'Ỡ': 'O', 'Ở': 'O', 'Ợ': 'O',
        'Ð': 'D', 'Ñ': 'N', 'Ö': 'O', 'Ő': 'O', 'Đ': 'D',
        'Ù': 'U', 'Ú': 'U', 'Ũ': 'U', 'Ủ': 'U', 'Ụ': 'U',
        'Ư': 'U', 'Ừ': 'U', 'Ứ': 'U', 'Ữ': 'U', 'Ử': 'U', 'Ự': 'U',
        'Ỳ': 'Y', 'Ý': 'Y', 'Ỹ': 'Y', 'Ỷ': 'Y', 'Ỵ': 'Y',
        'Ø': 'O', 'Û': 'U', 'Ü': 'U', 'Ű': 'U', 'Þ': 'TH',
        'ß': 'ss', 
        'à': 'a', 'á': 'a', 'ã': 'a', 'ả': 'a', 'ạ': 'a',
        'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ẵ': 'a', 'ẳ': 'a', 'ặ': 'a',
        'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ẫ': 'a', 'ẩ': 'a', 'ậ': 'a',
        'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c', 
        'è': 'e', 'é': 'e', 'ẽ': 'e', 'ẻ': 'e', 'ẹ': 'e',
        'ê': 'e', 'ề': 'e', 'ế': 'e', 'ễ': 'e', 'ể': 'e', 'ệ': 'e',
        'ì': 'i', 'í': 'i', 'ĩ': 'i', 'ỉ': 'i', 'ị': 'i',
        'ë': 'e', 'î': 'i', 'ï': 'i', 
        'ò': 'o', 'ó': 'o', 'õ': 'o', 'ỏ': 'o', 'ọ': 'o',
        'ô': 'o', 'ồ': 'o',' ố': 'o', 'ỗ': 'o', 'ổ': 'o', 'ộ': 'o',
        'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ỡ': 'o', 'ở': 'o', 'ợ': 'o',
        'ð': 'd', 'ñ': 'n', 'ö': 'o', 'ő': 'o', 'đ': 'd',
        'ù': 'u', 'ú': 'u', 'ũ': 'u', 'ủ': 'u', 'ụ': 'u',
        'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ữ': 'u', 'ử': 'u', 'ự': 'u',
        'ỳ': 'y', 'ý': 'y', 'ỹ': 'y', 'ỷ': 'y', 'ỵ': 'y',
        'ø': 'o', 'û': 'u', 'ü': 'u', 'ű': 'u', 'þ': 'th', 
        'ÿ': 'y',

        // Latin symbols
        '©': '(c)',

        // Greek
        'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'H', 'Θ': '8',
        'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': '3', 'Ο': 'O', 'Π': 'P',
        'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y', 'Φ': 'F', 'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W',
        'Ά': 'A', 'Έ': 'E', 'Ί': 'I', 'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W', 'Ϊ': 'I',
        'Ϋ': 'Y',
        'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h', 'θ': '8',
        'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3', 'ο': 'o', 'π': 'p',
        'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f', 'χ': 'x', 'ψ': 'ps', 'ω': 'w',
        'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ή': 'h', 'ώ': 'w', 'ς': 's',
        'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y', 'ΐ': 'i',

        // Turkish
        'Ş': 'S', 'İ': 'I', 'Ç': 'C', 'Ü': 'U', 'Ö': 'O', 'Ğ': 'G',
        'ş': 's', 'ı': 'i', 'ç': 'c', 'ü': 'u', 'ö': 'o', 'ğ': 'g', 

        // Russian
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh',
        'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O',
        'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C',
        'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu',
        'Я': 'Ya',
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
        'я': 'ya',

        // Ukrainian
        'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G',
        'є': 'ye', 'і': 'i', 'ї': 'yi', 'ґ': 'g',

        // Czech
        'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ů': 'U', 
        'Ž': 'Z', 
        'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't', 'ů': 'u',
        'ž': 'z', 

        // Polish
        'Ą': 'A', 'Ć': 'C', 'Ę': 'e', 'Ł': 'L', 'Ń': 'N', 'Ó': 'o', 'Ś': 'S', 'Ź': 'Z', 
        'Ż': 'Z', 
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z',
        'ż': 'z',

        // Latvian
        'Ā': 'A', 'Č': 'C', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'i', 'Ķ': 'k', 'Ļ': 'L', 'Ņ': 'N', 
        'Š': 'S', 'Ū': 'u', 'Ž': 'Z', 
        'ā': 'a', 'č': 'c', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l', 'ņ': 'n',
        'š': 's', 'ū': 'u', 'ž': 'z'
    };

    // Make custom replacements
    for (var k in opt.replacements) {
        s = s.replace(RegExp(k, 'g'), opt.replacements[k]);
    }

    // Transliterate characters to ASCII
    if (opt.transliterate) {
        for (var k in char_map) {
            s = s.replace(RegExp(k, 'g'), char_map[k]);
        }
    }

    // Replace non-alphanumeric characters with our delimiter
    var alnum = (typeof(XRegExp) === 'undefined') ? RegExp('[^a-z0-9]+', 'ig') : XRegExp('[^\\p{L}\\p{N}]+', 'ig');
    s = s.replace(alnum, opt.delimiter);

    // Remove duplicate delimiters
    s = s.replace(RegExp('[' + opt.delimiter + ']{2,}', 'g'), opt.delimiter);

    // Truncate slug to max. characters
    s = s.substring(0, opt.limit);

    // Remove delimiter from ends
    s = s.replace(RegExp('(^' + opt.delimiter + '|' + opt.delimiter + '$)', 'g'), '');

    return opt.lowercase ? s.toLowerCase() : s;
}