import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import studentRoutes from './routes/Stundet_Routes.js';
import { swaggerServe, swaggerSetup } from './swagger/swagger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerServe, swaggerSetup);



// Page
app.get('/', (req, res) => {
  res.send('Asosiy sahifa');
});
app.use('/api/students', studentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlasga ulandik!"))
  .catch(err => console.error("MongoDB ulanishda xato:", err));


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});