import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';
import { router } from './router.js';

dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = express();

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'VF | VAPI Custom LLM Endpoint' });
});

app.use('/api', router);

// Export the app as a serverless function for Vercel
export default app;
