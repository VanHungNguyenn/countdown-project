import { APP_ENCRYPT_KEY } from '@/constants';
import * as CryptoTS from 'crypto-ts';

/**
 * Encrypt a given plaintext string using the APP_ENCRYPT_KEY
 *
 * @param plainText the string to encrypt
 * @returns the encrypted string
 */
export function encrypt(plainText: string) {
  const encryptedString = CryptoTS.AES.encrypt(plainText, APP_ENCRYPT_KEY).toString();

  return encryptedString;
}

/**
 * Decrypt a given encrypted string using the APP_ENCRYPT_KEY
 *
 * @param encryptedString the string to decrypt
 * @returns the decrypted string
 */
export function decrypt(encryptedString: string) {
  const bytes = CryptoTS.AES.decrypt(encryptedString, APP_ENCRYPT_KEY);
  const plainText = bytes.toString(CryptoTS.enc.Utf8);

  return plainText;
}
