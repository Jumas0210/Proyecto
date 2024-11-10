import mongoose from "mongoose";
import Sizes from "../schemas/sizes.js";

class sizesModel{

    constructor(){

    }

    async create(size){
        return await Sizes.create(size);
    }

    async getAll(){
        return await Sizes.find();
    }

    async getOne(id){
        return await Sizes.findById({_id: new mongoose.Types.ObjectId(id)});
    }

    async update(id, size){
        return await Sizes.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, size , {new: true});
    }

    async delete(id){
        return await Sizes.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }

}

export default new sizesModel