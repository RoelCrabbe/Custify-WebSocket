import { CardScanMessage } from '@card/cardScan';
import { CardScan } from '@card/enums';
import { WebSocketContext } from '@types';
import { logMessage } from 'shared';
import { WebSocket } from 'ws';

export const validateCardMessage = (
    msg: any,
    ws: WebSocket,
    clientIP: string,
): CardScanMessage | null => {
    if (msg.type !== CardScan.Scanned || typeof msg.cardId !== 'string') {
        logMessage('INVALID_FORMAT', 'Missing or invalid cardId', clientIP, msg);
        ws.send(JSON.stringify({ error: 'Invalid card-scan format' }));
        return null;
    }
    return msg as CardScanMessage;
};

export const handleCardScanned = (ctx: WebSocketContext, msg: any): void => {
    const { ws, clientIP, wss } = ctx;

    const cardMsg = validateCardMessage(msg, ws, clientIP);
    if (!cardMsg) return;

    logMessage(CardScan.Scanned, `Card was scanned: ${cardMsg.cardId}`, clientIP);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(
                JSON.stringify({
                    type: CardScan.Display,
                    cardId: cardMsg.cardId,
                    timestamp: new Date().toISOString(),
                }),
            );
        }
    });
};
