import React from 'react';
import CipherMethod from './CipherMethod';

const CaesarCipher = () => {
  const processText = (text, shift) => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char.match(/[A-Z]/)) {
          const code = char.charCodeAt(0);
          let shiftedCode = ((code - 65 + shift + 26) % 26) + 65;
          return String.fromCharCode(shiftedCode);
        } else {
          return char;
        }
      })
      .join('');
  };

  return (
    <CipherMethod
      title="Caesar Cipher"
      encryptFunction={(text, key) => processText(text, 3)}
      decryptFunction={(text, key) => processText(text, -3)}
      showKeyInput={false} // Hide key input for Caesar Cipher
    />
  );
};

export default CaesarCipher;

