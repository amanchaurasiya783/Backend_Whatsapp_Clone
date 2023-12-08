const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const url = 'mongodb://localhost:27017/whatsapp-clone';


// Create a storage object with a given configuration
const storage = new GridFsStorage({
    url: url,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (req, file) => {

        const fileType = ['image/png', 'image/jpg', 'image/jpeg'];

        if (fileType.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName: 'photos',
            filename: `${Date.now()}-file-${file.originalname}`
        };
    }
});

// Set multer storage engine to the newly created object
const upload = multer({ storage });

module.exports = upload