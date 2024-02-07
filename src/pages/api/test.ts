// pages/api/example.ts
import { NextApiRequest, NextApiResponse } from 'next';
import withCors from '../middleware/cors';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Logika handler API di sini
  res.status(200).json({ message: 'Hello from the API!' });
};

// Menggunakan middleware CORS untuk endpoint ini
export default withCors(handler);
