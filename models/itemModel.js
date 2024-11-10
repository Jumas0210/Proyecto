import mongoose from 'mongoose';
import Item from '../schemas/items.js'

class itemsModel{

    async create(item){
        return await Item.create(item);
    }

    async getAll(){
        return await Item.find();
    }

    async getOne(id){
        return await Item.findById({_id : new mongoose.Types.ObjectId(id)});
    }

    async update(id, item){
        return await Item.findOneAndUpdate({_id : new mongoose.Types.ObjectId(id)},item, { new:true });
    }

    async delete(id){
        return await Item.findOneAndDelete({_id : new mongoose.Types.ObjectId(id)});
    }
}

export default new itemsModel