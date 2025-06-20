import { broadcastMessage, sendMessageToUser } from '@middleware/connection';
import { NotificationMessage, NotificationType } from '@notification';
import { WebSocketContext } from '@types';
import { logMessage } from 'shared';
import { WebSocket } from 'ws';

export const validateNewNotification = (
    msg: any,
    ws: WebSocket,
    clientIP: string,
): NotificationMessage | null => {
    if (msg.type !== NotificationType.NewNotification || typeof msg.content !== 'string') {
        logMessage('INVALID_FORMAT', 'Missing or invalid content', clientIP, msg);
        ws.send(JSON.stringify({ error: 'Invalid format: missing or invalid content' }));
        return null;
    }

    if (msg.recipientId !== undefined) {
        if (typeof msg.recipientId !== 'number' || msg.recipientId <= 0) {
            logMessage('INVALID_FORMAT', 'Invalid recipientId format', clientIP, msg);
            ws.send(
                JSON.stringify({ error: 'Invalid format: recipientId must be a positive number' }),
            );
            return null;
        }
    }

    return {
        type: msg.type,
        content: msg.content,
        recipientId: msg.recipientId,
    } as NotificationMessage;
};

export const handleNewNotification = (ctx: WebSocketContext, msg: any): void => {
    const { ws, clientIP, wss } = ctx;

    const notificationMsg = validateNewNotification(msg, ws, clientIP);
    if (!notificationMsg) return;

    logMessage(
        NotificationType.NewNotification,
        `New notification: ${notificationMsg.content}`,
        clientIP,
    );

    if (notificationMsg.recipientId) {
        sendMessageToUser(notificationMsg.recipientId, {
            type: NotificationType.NewNotification,
            content: notificationMsg.content,
            timestamp: new Date().toISOString(),
        });
    } else {
        broadcastMessage(
            {
                type: NotificationType.NewNotification,
                content: notificationMsg.content,
                timestamp: new Date().toISOString(),
            },
            wss,
        );
    }
};
