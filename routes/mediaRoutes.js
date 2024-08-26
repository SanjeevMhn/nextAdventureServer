import express from 'express';
import { uploadBannerImage } from '../controllers/mediaController.js';
import multer from 'multer';

// const upload = multer({ dest: "./uploads" });

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

var upload = multer({ storage: storage })

const mediaRouter = express.Router();

mediaRouter.route('/upload')
	.post(upload.single('image'), uploadBannerImage)


export default mediaRouter;