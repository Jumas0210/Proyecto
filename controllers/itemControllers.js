import itemModel from '../models/itemModel.js';


class ItemsController{
    constructor(){

    }

    async getAll(req, res){
        try {

            const page = req.query.p || 0

            const data = await itemModel.getAll(page);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res){
        const {id} = req.params
        try {
            const data = await itemModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async create(req, res){
        try {
            const data = await itemModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res){
        try {
            const {id} = req.params
            const data = await itemModel.update(id,req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    
    async delete(req, res){
        try {
            const {id} = req.params;
            const data = await itemModel.delete(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

}

export default new ItemsController();