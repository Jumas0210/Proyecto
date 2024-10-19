class ItemsController{
    constructor(){

    }

    async getAll(req, res){
        try {
            res.status(201).json({status : 'getAll-ok'});
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res){
        const {id} = req.params
        try {
            res.status(201).json({status : 'getOne-ok'});
        } catch (e) {
            res.status(500).send(e);
        }
    }

    create(req, res){
        try {
            res.status(201).json({status : 'create-ok'});
        } catch (e) {
            res.status(500).send(e);
        }
    }

    update(req, res){
        try {
            res.status(201).json({status : 'update-ok'});
        } catch (e) {
            res.status(500).send(e);
        }
    }
    
    delete(req, res){
        try {
            res.status(201).json({status : 'delete-ok'});
        } catch (e) {
            res.status(500).send(e);
        }
    }

}

export default new ItemsController();