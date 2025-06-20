import { NotificationType } from '@notification';
import { ClientMessage } from '@types';

export interface NotificationMessage extends ClientMessage {
    type: typeof NotificationType.NewNotification;
    content: string;
    recipientId?: number;
}
