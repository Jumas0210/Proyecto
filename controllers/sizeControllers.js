import sizeModel from "../models/sizeModel.js";
import itemModel from "../models/itemModel.js";
import mongoose from "mongoose";

class sizeController{

    constructor(){

    }

    async create(req, res){
        try {
            const { itemId } = req.body;

            const idValid = mongoose.Types.ObjectId.isValid(itemId);

            if(idValid){

                const itemExists = await itemModel.getOne( itemId );
            
                if (itemExists) {
                    const data =  await sizeModel.create(req.body);
        
                    return res.status(200).json({msg : "Tallas agregadas con exito" , data});
                }else{
                    return res.status(400).json({msg : "Item no encontrado"});
                }

            }

            return res.status(400).json({msg : "item id invalido"});

        } catch (e) {
            res.status(500).send(e);
        }
    }

}

export default new sizeController();