const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/', userController.read);

router.post('/', userController.create);

router.route("/:id")
    .get(userController.readuser)
    .put(userController.update)
    .delete(userController.delete)
    
module.exports = router;