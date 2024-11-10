import 'dotenv/config';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

class dbClient{

    constructor(){
        this.connect();
    }

    async connect(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/Shoes?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
        console.log("conectado a base de datos");
    }

    async closeConnection(){
        try {
            await mongoose.disconnect();
            console.log("Conexion a la base de datos cerrada");
        } catch (e) {
            console.log("Error al cerrar la conexion", e);
        }
    }
}

export default new dbClient();