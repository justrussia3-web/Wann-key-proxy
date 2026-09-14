// api/generate.js
export default function handler(req, res) {
  // 1. Buat key acak dengan format tertentu
  const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
  const key = `VXTU-${randomPart}`;

  // 2. Simpan key di memori server (untuk demo)
  //    Di produksi, gunakan database seperti Vercel KV atau Redis.
  global.currentKey = key;
  global.keyExpiry = Date.now() + (60 * 60 * 1000); // Kedaluwarsa 1 jam

  console.log(`Key baru dibuat: ${key}`);

  // 3. Kirim respons sukses
  res.status(200).json({
    success: true,
    key: key,
    expires_in: '1 hour',
    generated_at: new Date().toISOString()
  });
}
