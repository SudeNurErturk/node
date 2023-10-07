const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ana sayfa
app.get('/', (req, res) => {
  res.send('Merhaba, Elastic Beanstalk ile Node.js uygulamasına hoş geldiniz!');
});

// Örnek bir API endpoint'i
app.get('/api/mesaj', (req, res) => {
  res.json({ mesaj: 'Bu bir örnek JSON cevabıdır.' });
});

// 404 Hata yönlendirmesi
app.use((req, res) => {
  res.status(404).send('Sayfa bulunamadı');
});

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
