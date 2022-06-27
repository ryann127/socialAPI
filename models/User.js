const User = require('./User');
const Thought = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        //validation
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      },
    {
      toJSON: {
        getters: true,
      },
    }
  );

module.exports = { User, Thought };