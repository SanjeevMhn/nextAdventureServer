import swaggerJsdoc from "swagger-jsdoc"

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: 'Next Adventure',
			version: '1.0.0',
			description: 'API documentation for Next Adventure.'
		},
		host: 'localhost:8000',
		basePath: '/api/v1'
	},
	apis: ['./docs/**/*.yaml'],
}

const swaggerSpec = swaggerJsdoc(options);
export {
	swaggerSpec 
}