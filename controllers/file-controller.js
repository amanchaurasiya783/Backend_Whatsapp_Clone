const uploadFile = (req, res) => {
    console.log(req);
    const url = 'http://localhost:5000';
    try {
        if (!req.file) {
            return res.status(404).json('file not found !');
        }
        const imageURL = `${url}/file/${req / file.filename}`;

        return res.status(200).json(imageURL);
    } catch (error) {
        console.log('uploadFile Controller error : ', error.message);
        return res.status(500).json(error.message);
    }
}

module.exports = {
    uploadFile
}