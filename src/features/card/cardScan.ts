import { CardScanType } from '@card/enums';
import { ClientMessage } from '@types';

export interface CardScanMessage extends ClientMessage {
    type: typeof CardScanType.Scanned;
    cardId: string;
}
