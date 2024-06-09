import React from 'react';
import CipherMethod from './CipherMethod';

const RailFenceCipher = () => {
  const encryptRailFenceCipher = (text, key) => {
    let row = Array.from({ length: parseInt(key) }, () => []);
    for (let i = 0; i < parseInt(key); i++) {
      for (let j = i; j < text.length; j += parseInt(key)) {
        row[i].push(text[j]);
      }
    }
    return row.flat().join('');
  };

  const decryptRailFenceCipher = (text, key) => {
    let decryptedText = '';
    const depth = Math.ceil(text.length / parseInt(key));
    for (let i = 0; i < depth; i++) {
      for (let j = i; j < text.length; j += depth) {
        decryptedText += text[j];
      }
    }
    return decryptedText;
  };

  return (
    <CipherMethod
      title="Rail Fence Cipher"
      encryptFunction={encryptRailFenceCipher}
      decryptFunction={decryptRailFenceCipher}
    />
  );
};

export default RailFenceCipher;

