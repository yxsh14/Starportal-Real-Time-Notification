import * as notificationService from '../services/notificationServices.js';

export const createNotification = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = req.user.id;
        const result = await notificationService.createNotification(userId, message);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAllNotifications = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await notificationService.getAllNotifications(userId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getNotificationById = async (req, res) => {
    try {
        const userId = req.user.id;
        const notificationId = req.params.id;
        const result = await notificationService.getNotificationById(userId, notificationId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const markNotificationAsRead = async (req, res) => {
    try {
        const userId = req.user.id;
        const notificationId = req.params.id;
        const result = await notificationService.markNotificationAsRead(userId, notificationId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
