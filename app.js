const express = require('express');
const app = express();
const multer = require('multer');
//const upload = multer({dest:'uploads/'});


const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: "dukhwqpx8",
    api_key: "527552271463255",
    api_secret: "j1xNX_jNAE1MDChVC6aOsCcwDbU"
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'YelpCamp',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

const upload = multer({ storage });


app.set('view engine', 'ejs');

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/form', upload.single('image'), (req, res) => {
    res.send(req.file)
})

app.listen(3000, () => {
    console.log('serving on port 3000');
});