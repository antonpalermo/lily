import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated',
    },
    toJSON: {
      virtuals: true,
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const User = mongoose.model('users', UserSchema);
