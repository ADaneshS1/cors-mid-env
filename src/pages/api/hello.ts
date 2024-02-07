// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import middle from '../middleware/cors'
// Inisialisasi middleware CORS menggunakan Cors dari paket cors
const cors = middle(Cors({ 
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
}));

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Menggunakan middleware CORS di sini
  await cors(req, res);

  // Konten utama API
  res.json({ message: 'Hello from the API!' });
};
