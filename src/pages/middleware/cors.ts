// middleware/cors.ts
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import next from 'next';

// Inisialisasi middleware CORS dengan konfigurasi sesuai kebutuhan
const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
const corsMiddleware = Cors(corsOptions);

// Middleware untuk menangani CORS
const withCors = (apiHandler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // Mengaktifkan CORS untuk setiap permintaan
  await corsMiddleware(req, res,next);

  // Menjalankan handler setelah middleware CORS
  return apiHandler(req, res);
};

export default withCors;
