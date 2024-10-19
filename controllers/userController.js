class UsersController{
    constructor(){

    }

    read(req, res){
        res.json({msg: 'Consulta user'})
    }

    readuser(req, res){
        const {id} = req.params
        res.json({msg: `Consulta de un user ${id}`})
    }

    create(req, res){
        res.json({msg: 'Ingreso user'})
    }

    update(req, res){
        res.json({msg: 'Actualizacion user'})
    }
    
    delete(req, res){
        res.json({msg: 'borrado user'})
    }

}

module.exports = new UsersController();