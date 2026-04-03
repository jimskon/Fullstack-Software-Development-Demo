const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4101;
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express backend.' });
});

app.get('/api/status', (req, res) => {
  res.json({
    ok: true,
    timestamp: new Date().toISOString(),
    port: PORT,
  });
});

app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
