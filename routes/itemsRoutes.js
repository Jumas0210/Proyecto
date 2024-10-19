import express from 'express';
const router = express.Router();
import ItemsController from '../controllers/itemControllers.js';

router.get('/', ItemsController.getAll);

router.post('/', ItemsController.create);

router.route("/:id")
    .get(ItemsController.getOne)
    .put(ItemsController.update)
    .delete(ItemsController.delete)
    
export default router;