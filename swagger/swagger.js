import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const PORT = process.env.PORT || 5000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student API',
      version: '1.0.0',
      description: 'Studentlar uchun Express + MongoDB API hujjati',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // faqat route fayllarni o‘qiydi
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerServe = swaggerUi.serve;
export const swaggerSetup = swaggerUi.setup(swaggerSpec);
