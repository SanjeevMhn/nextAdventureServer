import express from 'express';
import { uploadBannerImage } from '../controllers/mediaController.js';
import multer from 'multer';

const upload = multer({
	dest: '../uploads'
})

const mediaRouter = express.Router();

mediaRouter.route('/upload')
	.post(upload.single('image'),uploadBannerImage)


export default mediaRouter;