import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const User = mongoose.model('users', UserSchema);
