import { addUserConnection, removeUserConnection } from '@middleware/connection';
import { messageRouter } from '@middleware/index';
import { WebSocketContext } from '@types';
import { extractTokenFromQuery, getUserIdFromToken } from '@utils/jwt';
import dotenv from 'dotenv';
import { logMessage, processEnv } from 'shared';
import { WebSocketServer } from 'ws';

dotenv.config();

const publicApiPort = processEnv.getApiPort();
const wss = new WebSocketServer({ port: publicApiPort });

wss.on('connection', (ws, req) => {
    const clientIP = req.socket.remoteAddress ?? 'Unknown IP';
    logMessage('CONNECTED', 'Client connected', clientIP);

    const token = extractTokenFromQuery(req.url || '');
    const userId = token ? getUserIdFromToken(token) : null;

    if (userId) {
        (ws as any).userId = userId;
        addUserConnection(userId, ws);
        logMessage('AUTHENTICATED', `User ${userId} authenticated`, clientIP);
    }

    const ctx: WebSocketContext = { ws, clientIP, wss };
    ws.on('message', (data) => messageRouter.handleMessage(ctx, data.toString()));

    ws.on('close', (code, reason) => {
        if (userId) removeUserConnection(userId, ws);
        logMessage('DISCONNECTED', 'Client disconnected', clientIP, {
            code,
            reason: reason.toString(),
        });
    });

    ws.on('error', (err) => {
        // Add cleanup on error
        if (userId) {
            removeUserConnection(userId, ws);
        }
        logMessage('ERROR', 'WebSocket error', clientIP, err);
    });
});
