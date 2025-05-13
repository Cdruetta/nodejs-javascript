const express = require('express');

const app = express();

const port = 3000

app.use(express.json());

const productosRoutes = require('./routes/products.routes')
app.use('/productos', productosRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
