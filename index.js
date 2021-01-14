require('dotenv').config();
const express = require('express');

const app = express();
const router = require('./routes');

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', router);

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/ok', (req, res) => {
  res.send('ok');
});

app.get('/streams/:channel/index.m3u8', (req, res) => {
  res.download(`./media/${req.params.channel}/index.m3u8`);
});

app.get('/streams/:channel/:segment.ts', (req, res) => {
  res.download(`./media/${req.params.channel}/${req.params.segment}.ts`);
});
