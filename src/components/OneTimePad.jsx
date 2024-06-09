import React from 'react';
import CipherMethod from './CipherMethod';

const OneTimePad = () => {
  const generateKey = (length) => {
    const key = [];
    for (let i = 0; i < length; i++) {
      key.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    }
    return key.join('');
  };

  const encryptOneTimePad = (text, key) => {
    if (text.length !== key.length) {
      return 'Key length must be equal to text length.';
    }
    const result = text.split('').map((char, index) => {
      const textChar = char.charCodeAt(0);
      const keyChar = key.charCodeAt(index);
      const encryptedChar = ((textChar + keyChar) % 26) + 65;
      return String.fromCharCode(encryptedChar);
    });
    return result.join('');
  };

  const decryptOneTimePad = (text, key) => {
    if (text.length !== key.length) {
      return 'Key length must be equal to text length.';
    }
    const result = text.split('').map((char, index) => {
      const textChar = char.charCodeAt(0);
      const keyChar = key.charCodeAt(index);
      const decryptedChar = ((textChar - keyChar + 26) % 26) + 65;
      return String.fromCharCode(decryptedChar);
    });
    return result.join('');
  };

  return (
    <CipherMethod
      title="One Time Pad Cipher"
      encryptFunction={encryptOneTimePad}
      decryptFunction={decryptOneTimePad}
      showKeyInput={false}
    />
  );
};

export default OneTimePad;
