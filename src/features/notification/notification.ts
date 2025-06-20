import { NotificationType } from '@notification/enums';
import { ClientMessage } from '@types';

export interface NotificationMessage extends ClientMessage {
    type: typeof NotificationType.NewNotification;
    content: string;
}
