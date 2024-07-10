import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const notificationSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    userId: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
});

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;
