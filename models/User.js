import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    connected: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);
export default User;
