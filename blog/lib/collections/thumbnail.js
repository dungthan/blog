var createThumbnail = function (fileObj, readStream, writeStream) {
	readStream.pipe(writeStream);
};

Thumbnail = new FS.Collection('thumbnail', {
	stores: [
		new FS.Store.FileSystem('thumbStore', { path: '/Users/dung/Resources/Meteor/blog/blog/client/imagesStore' }),
		new FS.Store.FileSystem('thumbnail', { path: '/Users/dung/Resources/Meteor/blog/blog/client/thumbnail', transformWrite: createThumbnail })
	]
});

Thumbnail.allow({
	insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        console.log("update");
        return true;
    },
    remove: function (userId, doc) {
        console.log("remove");
        return true;
    },
    download: function(userId, doc) {
        console.log('download');
        return true;
    },
    fetch: null,
});