import { User } from '@interfaces/users.interface';
import { Document, model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
