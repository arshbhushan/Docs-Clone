const express=require('express');
const router=express.Router();

router.get('/',userController,getAllUsers);
router.post('/',userController.createUser);
router.get('/:id',userController.getUserById);


module.exports=router;