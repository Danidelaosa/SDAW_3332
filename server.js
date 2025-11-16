const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Servir archivos estáticos (script.js)
app.use(express.static(__dirname));

// Ruta para index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

