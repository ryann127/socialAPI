const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      maxlenght: 150,
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

);

const thought = model('thought', thoughtSchema);

module.exports = thought;
