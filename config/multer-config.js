const multer = require('multer');

const storage = multer.memoryStorage(); //for the memoery storage
const upload = multer({ storage: storage});

module.exports = upload;