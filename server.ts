import dotenv from 'dotenv';
import { WebSocket, WebSocketServer } from 'ws';
import { isJSONStringObject, logMessage } from './utils/helpers';

dotenv.config();

const PORT = parseInt(process.env.WS_PORT || '6969', 10);
const wss = new WebSocketServer({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

wss.on('connection', (ws, req) => {
    const clientIP = req.socket.remoteAddress ?? 'Unknown IP';
    logMessage('CONNECTED', 'Client connected', clientIP);

    ws.on('message', (rawData) => {
        const rawStr = rawData.toString();

        if (!isJSONStringObject(rawStr)) {
            logMessage('INVALID_JSON', 'Received invalid JSON', clientIP, rawStr);
            return;
        }

        const msg = JSON.parse(rawStr);

        if (msg?.type === 'card-scan' && typeof msg.cardId === 'string') {
            logMessage('CARD_SCAN', `Card Scanned: ${msg.cardId}`, clientIP);

            const broadcastData = JSON.stringify({
                type: 'card-display',
                cardId: msg.cardId,
                timestamp: new Date().toISOString(),
            });

            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(broadcastData);
                }
            });
        } else {
            logMessage('UNKNOWN_TYPE', 'Unknown message type or bad format', clientIP, msg);
            ws.send(JSON.stringify({ error: 'Unknown message type or format' }));
        }
    });

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
