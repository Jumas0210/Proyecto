import mongoose from 'mongoose';
import Users from '../schemas/users.js'

class UsersModel{

    async create(user){
        return await Users.create(user);
    }

    async getAll(){
        return await Users.find();
    }

    async getOneById(id){
        return await Users.findById({_id : new mongoose.Types.ObjectId(id)});
    }

    async getOne(filter){
        return await Users.findOne(filter);
    }

    async update(id, user){
        return await Users.findOneAndUpdate({_id : new mongoose.Types.ObjectId(id)},user, { new:true });
    }

    async delete(id){
        return await Users.findOneAndDelete({_id : new mongoose.Types.ObjectId(id)});
    }
}

export default new UsersModel