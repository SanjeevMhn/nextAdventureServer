
import dotenv from 'dotenv';
import { imagekit } from '../imageKit/imagekit.js';

dotenv.config()

const uploadBannerImage = async (req, res) => {
	try {

		if (!req.file) {
			return res.status(400).json({
				message: 'Image not found.'
			})
		}
		let banner_info = req.body && req.body.banner_info ? req.body.banner_info : 'hero';

		// console.log('./uploads/' + req.file.filename)

		imagekit.upload({
			file: req.file.originalname,
			fileName: req.file.originalname,
			extensions: [
				{
					name: "google-auto-tagging",
					maxTags: 5,
					minConfidence: 95
				}
			],
			transformation: {
				pre: 'l-text,i-Imagekit,fs-50,l-end',
				post: [
					{
						type: 'transformation',
						value: 'w-100'
					}
				]
			},
		}).then((response) => {
			console.log(req.file, response)
		}).catch(err => {
			console.error(err)
		})

	} catch (err) {
		res.status(500).json({
			message: 'Uploading failed'
		});
		console.error(err)
	}
}

export {
	uploadBannerImage
}
