export const CardScan = {
    Scanned: 'card-scan',
    Display: 'card-display',
} as const;

export type CardScan = (typeof CardScan)[keyof typeof CardScan];
