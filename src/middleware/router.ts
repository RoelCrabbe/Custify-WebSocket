import { cardHandler, CardScan } from '@card';
import { ClientMessage, WebSocketContext } from '@types';
import { isJSONStringObject, logMessage } from 'shared';

export const handleMessage = (ctx: WebSocketContext, rawStr: string): void => {
    const { ws, clientIP } = ctx;

    if (!isJSONStringObject(rawStr)) {
        logMessage('INVALID_JSON', 'Invalid JSON received', clientIP, rawStr);
        ws.send(JSON.stringify({ error: 'Invalid JSON format' }));
        return;
    }

    const msg: ClientMessage = JSON.parse(rawStr);

    switch (msg.type) {
        case CardScan.Scanned:
            return cardHandler.handleCardScanned(ctx, msg);
        default:
            logMessage('UNKNOWN_TYPE', 'Unknown message type', clientIP, msg);
            ws.send(JSON.stringify({ error: 'Unknown message type' }));
    }
};
