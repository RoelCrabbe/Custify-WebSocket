import { NotificationType } from '@notification/enums';
import { NotificationMessage } from '@notification/notification';
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
        ws.send(JSON.stringify({ error: 'Invalid format' }));
        return null;
    }
    return msg as NotificationMessage;
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

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(
                JSON.stringify({
                    type: NotificationType.NewNotification,
                    content: notificationMsg.content,
                    timestamp: new Date().toISOString(),
                }),
            );
        }
    });
};
