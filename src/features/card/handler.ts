import { CardScanMessage } from '@card/cardScan';
import { CardScanType } from '@card/enums';
import { WebSocketContext } from '@types';
import { logMessage } from 'shared';
import { WebSocket } from 'ws';

export const validateScanned = (
    msg: any,
    ws: WebSocket,
    clientIP: string,
): CardScanMessage | null => {
    if (msg.type !== CardScanType.Scanned || typeof msg.cardId !== 'string') {
        logMessage('INVALID_FORMAT', 'Missing or invalid cardId', clientIP, msg);
        ws.send(JSON.stringify({ error: 'Invalid format' }));
        return null;
    }
    return msg as CardScanMessage;
};

export const handleCardScanned = (ctx: WebSocketContext, msg: any): void => {
    const { ws, clientIP, wss } = ctx;

    const cardMsg = validateScanned(msg, ws, clientIP);
    if (!cardMsg) return;

    logMessage(CardScanType.Scanned, `Card was scanned: ${cardMsg.cardId}`, clientIP);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(
                JSON.stringify({
                    type: CardScanType.Display,
                    cardId: cardMsg.cardId,
                    timestamp: new Date().toISOString(),
                }),
            );
        }
    });
};
