import { MongoClient } from "mongodb";

class dbClient{
    constructor(){
        const queryString = "mongodb+srv://usrshoesM5MABWtWjD1bjk8w@shoes.bf1r7.mongodb.net/?retryWrites=true&w=majority&appName=shoes";
        this.client = new MongoClient(queryString);
    }

    async dbConnect(){
        try {
            await this.client.connect();
            this.db = this.client.db;
            console.log("Conectado al servidor de base de datos");
        } catch (e) {
            console.log(e)
        }
    }
}

export default new dbClient;