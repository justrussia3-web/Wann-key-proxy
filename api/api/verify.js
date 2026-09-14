// api/verify.js
export default function handler(req, res) {
  const { key } = req.query;

  // 1. Cek apakah key dikirim
  if (!key) {
    return res.status(400).json({ valid: false, message: 'Key tidak boleh kosong' });
  }

  // 2. Cek apakah key cocok dan belum kedaluwarsa
  const isValid = global.currentKey === key && Date.now() < global.keyExpiry;

  if (isValid) {
    return res.status(200).json({ valid: true, message: 'Key valid' });
  } else {
    return res.status(200).json({ valid: false, message: 'Key tidak valid atau sudah kedaluwarsa' });
  }
}
