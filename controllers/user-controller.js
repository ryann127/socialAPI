const { User, User } = require('../models');

module.exports = {
  // Get all Users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a User
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a User  -- WORK ON THIS ONE
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a User
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.UserId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .then(() => res.json({ message: 'user deleted!' }))
      // line above may be incorrect
      .catch((err) => res.status(500).json(err));
  },
  // Update a User
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
    .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { Friends: {FriendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
    .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  }
  
};
