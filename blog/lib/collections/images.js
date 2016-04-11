var createThumbnail = function (fileObj, readStream, writeStream) {
	readStream.pipe(writeStream);
};

Images = new FS.Collection('images', {
	stores: [
		new FS.Store.FileSystem('imagesStore', { path: '/Volumes/Data/METEOR/blog/blog/client/imagesStore' }),
		new FS.Store.FileSystem('thumbnail', { path: '/Volumes/Data/METEOR/blog/blog/client/thumbnail', transformWrite: createThumbnail })
	]
});

Images.allow({
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