import { ClientMessage, WebSocketContext } from '@types';
import { handleCardScan } from 'handlers';
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
        case 'card-scan':
            return handleCardScan(ctx, msg);

        default:
            logMessage('UNKNOWN_TYPE', 'Unknown message type', clientIP, msg);
            ws.send(JSON.stringify({ error: 'Unknown message type' }));
    }
};
