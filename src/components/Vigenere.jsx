import React from 'react';
import CipherMethod from './CipherMethod';

const Vigenere = () => {
  const encryptVigenere = (text, key) => {
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < text.length; i++) {
      const c = text.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode((c - 65 + key.charCodeAt(j % key.length) - 65) % 26 + 65);
        j++;
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode((c - 97 + key.charCodeAt(j % key.length) - 65) % 26 + 97);
        j++;
      } else {
        result += text.charAt(i);
      }
    }

    return result;
  };

  const decryptVigenere = (text, key) => {
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < text.length; i++) {
      const c = text.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode((c - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 65);
        j++;
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode((c - 97 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 97);
        j++;
      } else {
        result += text.charAt(i);
      }
    }

    return result;
  };

  return (
    <CipherMethod
      title="Vigenere Cipher"
      encryptFunction={encryptVigenere}
      decryptFunction={decryptVigenere}
    />
  );
};

export default Vigenere;
