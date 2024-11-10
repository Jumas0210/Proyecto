import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';

class UsersControllers{
    constructor(){

    };

    async register(req, res){
        try {
            const {email, password, name, address} = req.body;

            console.log(email);

            const userExists = await userModel.getOne({email});
            console.log(userExists);
            if (userExists) {
                return res.status(400).json({error: 'El usuario ya existe'});
            }
            
            const encryptedPassword = await bcrypt.hash(password,10);

            const data = await userModel.create({
                email,
                name,
                password : encryptedPassword,
                address
            });

            res.status (200).json(data);

        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async login(req,res){
        try {
            const {email, password} = req.body;

            const userExists = await userModel.getOne({email});

            if (!userExists) {
               return  res.status(400).json({Error: "el usuario no existe"});
            }

            const correctPassword = await bcrypt.compare(password, userExists.password);


            if (correctPassword) {
               return res.status(200).json({Correo: userExists.email, msg: "usuario verificado con exito"});
            }

            return res.status(200).json({Correo: userExists.email, msg: "Contraseña incorrecta"});

        } catch (e) {
            res.status(500).send(e);
        }
    }
};

export default new UsersControllers();