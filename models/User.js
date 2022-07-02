// const User = require('./User');
// const Thought = require('./Thought');

const { Schema, model } = require('mongoose');

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
        virtuals: true,
      },
      id: false,
    }
  );

  // Create a virtual property `domain` that's computed from `email`.
  userSchema.virtual('friendCount').get(function() {
    return this.friends.length
  });
  const User = model('User', userSchema);
  

module.exports = User