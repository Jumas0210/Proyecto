import express from 'express'
import routesItems from './routes/itemsRoutes.js'

const app = express();

app.use('/items', routesItems);

app.get('/', (req, res) => {
    res.send('hola mundo');
})

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));
}catch(e){

}
