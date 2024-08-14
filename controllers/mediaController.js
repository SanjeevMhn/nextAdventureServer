
import dotenv from 'dotenv';
import imagekit from '../imageKit/imagekit.js';


dotenv.config()

const uploadBannerImage = async (req,res) => {
	try{

		if(!req.file){
			return res.status(400).json({
				message: 'Image not found.'
			})
		}

		let banner_info = req.body && req.body.banner_info ? req.body.banner_info : 'hero';

		imagekit.upload({
			file: req.file.path,
			fileName: req.file.originalname,
		}).then(res => {
			
		}).catch(err => {
			console.error(err)
		})

	}catch(err){
		res.status(500).json({
			message: 'Uploading failed'
		});
		console.error(err)
	}
}

export {
	uploadBannerImage
}