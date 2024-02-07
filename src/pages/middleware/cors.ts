// middleware/cors.ts
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import type Cors from 'cors';

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
  await corsMiddleware(req, res);

  // Menjalankan handler setelah middleware CORS
  return apiHandler(req, res);
};

export default withCors;
