import { messageRouter } from '@middleware/index';
import { WebSocketContext } from '@types';
import dotenv from 'dotenv';
import { logMessage, processEnv } from 'shared';
import { WebSocketServer } from 'ws';

dotenv.config();

const publicApiPort = processEnv.getApiPort();
const wss = new WebSocketServer({ port: publicApiPort });

wss.on('connection', (ws, req) => {
    const clientIP = req.socket.remoteAddress ?? 'Unknown IP';
    logMessage('CONNECTED', 'Client connected', clientIP);

    const ctx: WebSocketContext = { ws, clientIP, wss };
    ws.on('message', (data) => messageRouter.handleMessage(ctx, data.toString()));

    ws.on('close', (code, reason) => {
        logMessage('DISCONNECTED', 'Client disconnected', clientIP, {
            code,
            reason: reason.toString(),
        });
    });

    ws.on('error', (err) => {
        logMessage('ERROR', 'WebSocket error', clientIP, err);
    });
});

wss.on('listening', () => {
    console.log(`WebSocket server running on ws://localhost:${publicApiPort}`);
});
