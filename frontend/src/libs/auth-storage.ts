import type { Token } from '@/api/auth/login-api';
import { TOKEN_KEY } from '@/constants';
import { decrypt, encrypt } from './encrypt';

export const authStorage = {
  getTokens(): Token | undefined {
    const storage = localStorage.getItem(TOKEN_KEY);
    const token = storage ? (JSON.parse(storage) as Token) : undefined;
    return token;
  },

  getAccessToken() {
    try {
      const token = this.getTokens();
      const access = token ? (decrypt(token.access) as string) : token;
      return access;
    } catch (e) {
      console.error('Failed to decrypt access token', e);
      // remove token
      localStorage.removeItem('access_token');
      return '';
    }
  },

  // getRefreshToken() {
  //   const token = this.getTokens();
  //   const refresh = token && token.refresh ? (decrypt(token.refresh) as string) : null;
  //   return refresh;
  // },

  setTokens(token: Token) {
    const tokenStorage = {
      access: encrypt(token.access),
      // refresh: encrypt(token.refresh),
    };
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenStorage));
  },

  removeTokens() {
    localStorage.removeItem(TOKEN_KEY);
  },

  isAuthenticated() {
    const token = this.getTokens();
    return token?.access;
  },
};
