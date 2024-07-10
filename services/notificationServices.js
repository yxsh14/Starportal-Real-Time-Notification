import Notification from '../models/Notification.js';
import { publishToQueue } from './realTimeService.js';

export const createNotification = async (userId, message) => {
    const notification = new Notification({ userId, message });
    await notification.save();
    publishToQueue('notifications', { userId, message });
    return { message: 'Notification created successfully' };
};

export const getAllNotifications = async (userId) => {
    return await Notification.find({ userId });
};

export const getNotificationById = async (userId, notificationId) => {
    const notification = await Notification.findById(notificationId);
    if (!notification || notification.userId !== userId) {
        throw new Error('Notification not found');
    }
    return notification;
};

export const markNotificationAsRead = async (userId, notificationId) => {
    const notification = await Notification.findById(notificationId);
    if (!notification || notification.userId !== userId) {
        throw new Error('Notification not found');
    }
    notification.read = true;
    await notification.save();
    return { message: 'Notification marked as read' };
};
