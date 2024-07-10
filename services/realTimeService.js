import { Server } from 'socket.io';
import amqp from 'amqplib/callback_api.js';

let io;

export const initWebSocket = (server) => {
    io = new Server(server, { cors: { origin: '*' } });
    io.on('connection', (socket) => {
        console.log('A user connected');
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};

export const sendNotification = (userId, message) => {
    io.to(userId).emit('notification', message);
};

export const publishToQueue = (queue, msg) => {
    amqp.connect(process.env.RABBITMQ_URL, (error0, connection) => {
        console.log("RabbitMQ connection Created. ");
        if (error0) throw error0;
        connection.createChannel((error1, channel) => {
            console.log("RabbitMQ Channel Created. ");
            if (error1) throw error1;
            channel.assertQueue(queue, { durable: false });
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
        });
    });
};

export const consumeFromQueue = (queue) => {
    amqp.connect(process.env.RABBITMQ_URL, (error0, connection) => {
        if (error0) throw error0;
        connection.createChannel((error1, channel) => {
            if (error1) throw error1;
            channel.assertQueue(queue, { durable: false });
            channel.consume(queue, (msg) => {
                const { userId, message } = JSON.parse(msg.content.toString());
                sendNotification(userId, message);
            }, { noAck: true });
        });
    });
};
