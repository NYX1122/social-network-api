const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser,
    addFriend
} = require('../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/:friendId')
  .put(addFriend);

module.exports = router;