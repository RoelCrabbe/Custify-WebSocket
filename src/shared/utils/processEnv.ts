export const getApiPort = (): number => {
    const value = process.env.NEXT_PUBLIC_API_PORT;
    const port = value ? parseInt(value, 10) : 8765;
    return isNaN(port) ? 8765 : port;
};
