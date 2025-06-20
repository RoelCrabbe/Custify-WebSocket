import { CardScan } from '@card/enums';
import { ClientMessage } from '@types';

export interface CardScanMessage extends ClientMessage {
    type: typeof CardScan.Scanned;
    cardId: string;
}
