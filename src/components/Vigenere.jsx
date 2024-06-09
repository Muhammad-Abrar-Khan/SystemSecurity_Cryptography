import React from 'react';
import CipherMethod from './CipherMethod';

const VigenereCipher = () => {
  const generateKeyStream = (text, key) => {
    const repeatedKey = key.repeat(Math.ceil(text.length / key.length)).toUpperCase();
    return repeatedKey.slice(0, text.length);
  };

  const processText = (text, keyStream, encrypt) => {
    return text
      .toUpperCase()
      .split('')
      .map((char, index) => {
        if (char.match(/[A-Z]/)) {
          const code = char.charCodeAt(0);
          const shift = keyStream.charCodeAt(index) - 65;
          let shiftedCode = encrypt
            ? ((code - 65 + shift + 26) % 26) + 65
            : ((code - 65 - shift + 26) % 26) + 65;
          return String.fromCharCode(shiftedCode);
        } else {
          return char;
        }
      })
      .join('');
  };

  return (
    <CipherMethod
      title="Vigenère Cipher"
      encryptFunction={(text, key) => processText(text, generateKeyStream(text, key), true)}
      decryptFunction={(text, key) => processText(text, generateKeyStream(text, key), false)}
    />
  );
};

export default VigenereCipher;