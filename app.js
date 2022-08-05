const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!こんにちは〜!変更しました〜(2回目)'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
