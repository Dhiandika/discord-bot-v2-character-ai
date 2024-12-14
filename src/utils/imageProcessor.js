const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { Image } = require('image-js'); // Pastikan Anda memiliki dependensi ini untuk memproses gambar

// Fungsi untuk memproses gambar dan menghasilkan respons AI
async function generateResponseFromImage(imageUrl) {
  try {
    // Download gambar dari URL
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    
    // Simpan gambar sementara di server lokal
    const tempFilePath = path.join(__dirname, 'temp_image.jpg');
    fs.writeFileSync(tempFilePath, response.data);

    // Gunakan library gambar untuk membuka dan memproses gambar
    const img = await Image.load(tempFilePath);
    const imageDescription = await analyzeImage(img); // Fungsi untuk menganalisis gambar

    // Hapus file sementara setelah pemrosesan
    fs.unlinkSync(tempFilePath);

    return `Processed image description: ${imageDescription}`;
  } catch (error) {
    console.error('Error processing image:', error);
    throw new Error('Failed to process the image.');
  }
}

// Fungsi contoh untuk menganalisis gambar
async function analyzeImage(img) {
  // Logika untuk menganalisis gambar, misalnya menggunakan API eksternal
  // Di sini bisa menggunakan API seperti Google Vision atau API lainnya untuk memproses gambar
  return 'AI processed image successfully!';
}

module.exports = { generateResponseFromImage };
