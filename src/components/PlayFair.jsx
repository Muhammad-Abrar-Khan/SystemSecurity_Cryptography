import React from 'react';
import CipherMethod from './CipherMethod';

const PlayfairCipher = () => {
  // Playfair Cipher functions here...

  const encryptByPlayfairCipher = (matrix, plainList) => {
    // Encryption logic here...
  };

  const decryptByPlayfairCipher = (matrix, cipherList) => {
    // Decryption logic here...
  };

  const playfairEncryptFunction = (text, key) => {
    const cleanedText = removeSpaces(toLowerCase(text));
    const keyMatrix = generateKeyTable(toLowerCase(key));
    const preparedText = diagraph(fillerLetter(cleanedText));
    return encryptByPlayfairCipher(keyMatrix, preparedText);
  };

  const playfairDecryptFunction = (text, key) => {
    const cleanedText = removeSpaces(toLowerCase(text));
    const keyMatrix = generateKeyTable(toLowerCase(key));
    const preparedText = diagraph(cleanedText);
    return decryptByPlayfairCipher(keyMatrix, preparedText);
  };

  return (
    <CipherMethod
      title="Playfair Cipher"
      encryptFunction={playfairEncryptFunction}
      decryptFunction={playfairDecryptFunction}
    />
  );
};

export default PlayfairCipher;

