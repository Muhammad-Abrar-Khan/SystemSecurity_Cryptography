import React from 'react';
import CipherMethod from './CipherMethod';

const Caesar = () => {
  const encryptCaesar = (text, shift) => {
    const result = text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        let shifted = code + shift;
        if (char >= 'A' && char <= 'Z') {
          shifted = ((shifted - 65) % 26) + 65;
        } else if (char >= 'a' && char <= 'z') {
          shifted = ((shifted - 97) % 26) + 97;
        }
        return String.fromCharCode(shifted);
      }
      return char;
    });
    return result.join('');
  };

  const decryptCaesar = (text, shift) => {
    return encryptCaesar(text, -shift);
  };

  return (
    <CipherMethod
      title="Caesar Cipher"
      encryptFunction={encryptCaesar}
      decryptFunction={decryptCaesar}
    />
  );
};

export default Caesar;
