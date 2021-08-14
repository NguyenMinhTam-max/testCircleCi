const express = require('express');
const morgan = require('morgan');
const multer = require('multer')
var app = express();
var cors = require('cors')
require('dotenv').config();
const fileUpload = multer({
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  })
  
app.use(morgan('combined'));
app.use(express.json())
app.use(cors())

const cloudinary = require('cloudinary').v2



const streamifier = require('streamifier')
app.use('/api/actors', require('./routes/actor.route'));
app.use('/api/customers', require('./routes/customer.route'));
console.log(cloudinary.config().cloud_name)
const PORT = 3000;

app.post('/upload', fileUpload.array('image', 5), function (req, res, next) {
    console.log(req.files)
    
    let streamUpload = (req, i) => {
        return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );
            streamifier.createReadStream(req.files[i].buffer).pipe(stream);
        });
    };

    async function upload(req, i) {
        let result = await streamUpload(req, i);
        console.log(result.url);
    }



    for (let i = 0; i < req.files.length; i++) {

        upload(req, i);
    }
    
});
app.get('/delete', function (req, res) {
    var link = 'oplejyvw18hlruycmwfa';
    cloudinary.api.delete_resources([link, ''],function (error, result) { 
        console.log(result); 
    });
})
app.listen(PORT, function () {
    console.log('app is listening at port 3000');
})