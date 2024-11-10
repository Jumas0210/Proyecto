import 'dotenv/config';
import express from 'express'
import routesItems from './routes/itemsRoutes.js';
import routesUser from './routes/userRoutes.js';
import routesSize from './routes/sizesRoutes.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/items', routesItems);

app.use('/user', routesUser);

app.use('/size', routesSize);

app.get('/', (req, res) => {
    res.send('hola mundo');
})

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));
}catch(e){
    console.log(e);
}

process.on('SIGINT', async() => {
    dbClient.closeConnection();
    procces.exit(0);
})
