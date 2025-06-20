import { logMessage } from 'shared';
import { WebSocket } from 'ws';

const userConnections = new Map<number, Set<WebSocket>>();

export const addUserConnection = (userId: number, ws: WebSocket) => {
    if (!userConnections.has(userId)) {
        userConnections.set(userId, new Set());
    }
    userConnections.get(userId)!.add(ws);
};

export const removeUserConnection = (userId: number, ws: WebSocket) => {
    const connections = userConnections.get(userId);
    if (connections) {
        connections.delete(ws);
        if (connections.size === 0) {
            userConnections.delete(userId);
        }
    }
};

export const sendMessageToUser = (userId: number, message: any) => {
    const connections = userConnections.get(userId);
    if (connections) {
        connections.forEach((ws) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(message));
            }
        });
        logMessage('MESSAGE_SENT', `Message sent to user ${userId}`, `user-${userId}`, {
            connectionCount: connections.size,
            messageType: message.type,
        });
    } else {
        logMessage('USER_NOT_CONNECTED', `User ${userId} not connected`, `user-${userId}`);
    }
};

export const broadcastMessage = (message: any, wss: any) => {
    let sentCount = 0;
    wss.clients.forEach((ws: WebSocket) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message));
            sentCount++;
        }
    });
    logMessage('BROADCAST_SENT', 'Message broadcasted to all clients', 'broadcast', {
        clientCount: sentCount,
        messageType: message.type,
    });
};
