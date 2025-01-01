const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// middleware setting
app.use(express.static(path.join(__dirname, '..')));

// always return index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// line request
app.listen(PORT, () => {
  console.log(`START SERVER`);
});
