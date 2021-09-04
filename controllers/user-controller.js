const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
          .sort({ _id: -1 })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
              console.log(err);
              res.status(400).json(err);
          });
    },
    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;