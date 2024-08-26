import express from 'express';
import dotenv from 'dotenv';
import categoryRouter from './routes/categoriesRoutes.js';
import mediaRouter from './routes/mediaRoutes.js';
import { serve, setup } from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/v1/docs', serve,setup(swaggerSpec));

app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/media', mediaRouter);
// app.use('/api/v1/destinations', require('./routes/destinationsRoutes'));

app.listen(port, () => {
	console.log(`Server listening in port ${port}`);
})