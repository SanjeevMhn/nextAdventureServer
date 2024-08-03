const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/categories', require('./routes/categoriesRoutes'));

app.listen(port, () => {
	console.log(`Server listening in port ${port}`);
})