export const NotificationType = {
    NewNotification: 'notification-new',
} as const;

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
