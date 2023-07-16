const express = require('express');
const { join } = require('path');

const app = express();
const port = 3000;

app.get('/', (_, res) => {
    res.status(200).sendFile(join(__dirname, '../../pages/index.html'));
});

app.get('/:pageName', (req, res) => {
    const { pageName } = req.params;

    res.status(200).sendFile(
        join(__dirname, '../../pages/', `${pageName}.html`),
    );
});

app.get('/style/:fileName', (req, res) => {
    const { fileName } = req.params;

    res.status(200).sendFile(
        join(__dirname, '../../pages/style', `${fileName}.css`),
    );
});

app.get('/js/:fileName', (req, res) => {
    const { fileName } = req.params;

    res.status(200).sendFile(
        join(__dirname, '../../pages/js', `${fileName}.js`),
    );
});

app.listen(port, () => {
    console.log(`App is running on 'http://localhost:${port}/'`);
});
