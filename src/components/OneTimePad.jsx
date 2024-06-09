  import React from 'react';
  import CipherMethod from './CipherMethod';

  const OneTimePad = () => {
    const stringEncryption = (text, key) => {
      let cipherText = '';

      // Step 1: Key and Plaintext Length Matching
      if (text.length !== key.length) {
        return 'Error: Key length must match plaintext length.';
      }

      for (let i = 0; i < text.length; i++) {
        // Step 2: Convert to Decimal
        const plaintextDecimal = text.charCodeAt(i) - 'A'.charCodeAt(0);
        const keyDecimal = key.charCodeAt(i) - 'A'.charCodeAt(0);

        // Step 3: Convert to Binary (in 5 bits, since A-Z)
        const plaintextBinary = plaintextDecimal.toString(2).padStart(5, '0');
        const keyBinary = keyDecimal.toString(2).padStart(5, '0');

        // Step 4: XOR Operation
        let xorResult = '';
        for (let j = 0; j < 5; j++) {
          xorResult += plaintextBinary[j] !== keyBinary[j] ? '1' : '0';
        }

        // Step 5: Convert to Decimal Again
        const xorDecimal = parseInt(xorResult, 2);

        // Step 6: Modulo Operation
        const moduloResult = xorDecimal % 26;

        // Step 7: Convert to Alphabets
        const encryptedChar = String.fromCharCode(moduloResult + 'A'.charCodeAt(0));

        cipherText += encryptedChar;
      }

      return cipherText;
    };

  const stringDecryption = (s, key) => {
    let plainText = '';

    // Step 1: Key and Ciphertext Length Matching
    if (s.length !== key.length) {
      return 'Error: Key length must match ciphertext length.';
    }

    for (let i = 0; i < s.length; i++) {
      // Step 2: Convert to Decimal
      const ciphertextDecimal = s.charCodeAt(i) - 'A'.charCodeAt(0);
      const keyDecimal = key.charCodeAt(i) - 'A'.charCodeAt(0);

      // Step 3: Convert to Binary (in 5 bits, since A-Z)
      const ciphertextBinary = ciphertextDecimal.toString(2).padStart(5, '0');
      const keyBinary = keyDecimal.toString(2).padStart(5, '0');

      // Step 4: XOR Operation
      let xorResult = '';
      for (let j = 0; j < 5; j++) {
        xorResult += ciphertextBinary[j] !== keyBinary[j] ? '1' : '0';
      }

      // Step 5: Convert to Decimal Again
      const xorDecimal = parseInt(xorResult, 2);

      // Step 6: Modulo Operation
      const moduloResult = xorDecimal % 26;

      // Step 7: Convert to Alphabets
      const decryptedChar = String.fromCharCode(moduloResult + 'A'.charCodeAt(0));

      plainText += decryptedChar;
    }

    return plainText;
  };


    return (
      <CipherMethod
        title="One-Time Pad Cipher"
        encryptFunction={stringEncryption}
        decryptFunction={stringDecryption}
      />
    );
  };

  export default OneTimePad;
