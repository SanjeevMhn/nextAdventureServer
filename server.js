const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res) => {
	res.status(200)
		.json({
			message: 'Hello World'
		})
})

app.listen(port, () => {
	console.log(`Server listening in port ${port}`);
})