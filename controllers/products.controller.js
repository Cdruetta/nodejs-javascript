let products = [
    { id: 1, nombre: 'monitor', precio: 40000 },
    { id: 2, nombre: 'CPU Ryzen', precio: 15000 }
]

//GET obtener todos los productos
const getProducts = (req, res) => {
    res.json({ data: products, status: 200, mensaje: 'Lista de productos encontrada' });
}

//GET obtener un producto por id
const getProductById = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id))
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' })

    res.json({ data: product, status: 200, mensaje: 'Producto encontrado' })
}

//POST crear un nuevo producto
const createProduct = (req, res) => {
    const { nombre, precio } = req.body;
    const newProduct = { id: products.length + 1, nombre, precio };
    products.push(newProduct);

    res.json({ data: newProduct, status: 201, mensaje: 'Producto creado' });
}

//PUT actualizar un producto
const updateProduct = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id))
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' })
    const { nombre, precio } = req.body;
    product.nombre = nombre || product.nombre;
    product.precio = precio || product.precio;

    res.json({ data: product, status: 200, mensaje: 'Producto actualizado' });
}

//DELETE eliminar un producto
const deleteProduct = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id))
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' })
    products = products.filter(item => item.id !== product.id)

    res.json({ status: 201, mensaje: 'Producto eliminado' });
}

// Exportar los controladores
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
