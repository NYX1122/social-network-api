const { Thought } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
          .sort({ _id: -1 })
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
              console.log(err);
              res.status(400).json(err);
          });
    },
    createThought({ body }, res) {
        Thought.create(body)
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => res.status(400).json(err));
    }
}

module.exports = thoughtController;