import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next();
    }
    this.password = bcryptjs.hashSync(this.password, 10);
    next();
  });

const User = mongoose.model('User', userSchema, 'Users');

export default User;