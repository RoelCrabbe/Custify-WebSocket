import { CardScanMessage, WebSocketContext } from '@types';
import { logMessage } from 'shared';
import { WebSocket } from 'ws';

export const handleCardScan = (ctx: WebSocketContext, msg: any): void => {
    const { ws, clientIP, wss } = ctx;

    if (typeof msg.cardId !== 'string') {
        logMessage('INVALID_FORMAT', 'Missing or invalid cardId', clientIP, msg);
        ws.send(JSON.stringify({ error: 'Invalid card-scan format' }));
        return;
    }

    const typedMsg = msg as CardScanMessage;

    logMessage('CARD_SCAN', `Card Scanned: ${typedMsg.cardId}`, clientIP);

    const broadcast = JSON.stringify({
        type: 'card-display',
        cardId: typedMsg.cardId,
        timestamp: new Date().toISOString(),
    });

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(broadcast);
        }
    });
};
