export const CardScanType = {
    Scanned: 'card-scan',
    Display: 'card-display',
} as const;

export type CardScanType = (typeof CardScanType)[keyof typeof CardScanType];
