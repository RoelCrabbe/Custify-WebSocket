import { WebSocket, WebSocketServer } from 'ws';

export type WebSocketContext = {
    ws: WebSocket;
    clientIP: string;
    wss: WebSocketServer;
};

export interface ClientMessage {
    type: string;
    [key: string]: any;
}
