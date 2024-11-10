import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

//router.get('/', userController.read);

router.post('/register', userController.register);

router.get('/login', userController.login);

//router.route("/:id")
//    .get(userController.readuser)
//    .put(userController.update)
//    .delete(userController.delete)
    
export default router;