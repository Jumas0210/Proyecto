import express from 'express';
const router = express.Router();
//import ItemsController from '../controllers/itemControllers.js';
import sizeControllers from '../controllers/sizeControllers.js';

//router.get('/', sizeControllers.getAll);

router.post('/', sizeControllers.create);

// router.route("/:id")
//     .get(ItemsController.getOne)
//     .put(ItemsController.update)
//     .delete(ItemsController.delete)
    
export default router;