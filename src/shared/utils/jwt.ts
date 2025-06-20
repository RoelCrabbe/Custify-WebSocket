import { jwtDecode } from 'jwt-decode';
import { URL } from 'url';

export type JwtToken = {
    userId: number;
    role: string;
};

export const getUserIdFromToken = (token: string): number | null => {
    try {
        const decoded = jwtDecode<JwtToken>(token);
        return decoded.userId || null;
    } catch {
        return null;
    }
};

export const extractTokenFromQuery = (url: string): string | null => {
    try {
        const urlObj = new URL(url, 'http://localhost');
        return urlObj.searchParams.get('token');
    } catch {
        return null;
    }
};
