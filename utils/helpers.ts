export const logMessage = (
    event: string,
    message: string,
    connId: string,
    data: unknown = false,
): void => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${event} - ${connId} - ${message}`);
    if (data) console.log(data);
};

export const isJSONStringObject = (str: string): boolean => {
    try {
        const parsed = JSON.parse(str);
        return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
    } catch {
        return false;
    }
};
