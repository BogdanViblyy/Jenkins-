const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/travel', (req, res) => {
       res.send('Моё любимое место для путешествий — Linnamäki (Helsinki).');
   });

   app.listen(port, () => {
       console.log(`Приложение запущено на порту ${port}`);
   });
