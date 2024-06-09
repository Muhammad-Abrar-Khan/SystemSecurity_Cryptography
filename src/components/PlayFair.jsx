import React from 'react';
import CipherMethod from './CipherMethod';

const PlayFair = () => {
  const generatePlayfairMatrix = (key) => {
    key = key.toUpperCase().replace(/J/g, 'I');
    const matrix = [];
    const seen = new Set();

    // Add key to matrix
    for (const char of key) {
      if (!seen.has(char) && char >= 'A' && char <= 'Z') {
        seen.add(char);
        matrix.push(char);
      }
    }

    // Add remaining letters to matrix
    for (let charCode = 65; charCode <= 90; charCode++) {
      const char = String.fromCharCode(charCode);
      if (char === 'J') continue; // Skip 'J'
      if (!seen.has(char)) {
        seen.add(char);
        matrix.push(char);
      }
    }

    return matrix;
  };

  const createDigraphs = (text) => {
    text = text.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
    const digraphs = [];
    for (let i = 0; i < text.length; i += 2) {
      let a = text[i];
      let b = text[i + 1] || 'X';
      if (a === b) {
        b = 'X';
        i--;
      }
      digraphs.push([a, b]);
    }
    return digraphs;
  };

  const findPosition = (matrix, char) => {
    const index = matrix.indexOf(char);
    return [Math.floor(index / 5), index % 5];
  };

  const encryptPlayfair = (text, key) => {
    const matrix = generatePlayfairMatrix(key);
    const digraphs = createDigraphs(text);
    let encryptedText = '';

    for (const [a, b] of digraphs) {
      const [rowA, colA] = findPosition(matrix, a);
      const [rowB, colB] = findPosition(matrix, b);

      if (rowA === rowB) {
        encryptedText += matrix[rowA * 5 + (colA + 1) % 5];
        encryptedText += matrix[rowB * 5 + (colB + 1) % 5];
      } else if (colA === colB) {
        encryptedText += matrix[((rowA + 1) % 5) * 5 + colA];
        encryptedText += matrix[((rowB + 1) % 5) * 5 + colB];
      } else {
        encryptedText += matrix[rowA * 5 + colB];
        encryptedText += matrix[rowB * 5 + colA];
      }
    }

    return encryptedText;
  };

  const decryptPlayfair = (text, key) => {
    const matrix = generatePlayfairMatrix(key);
    const digraphs = createDigraphs(text);
    let decryptedText = '';

    for (const [a, b] of digraphs) {
      const [rowA, colA] = findPosition(matrix, a);
      const [rowB, colB] = findPosition(matrix, b);

      if (rowA === rowB) {
        decryptedText += matrix[rowA * 5 + (colA + 4) % 5];
        decryptedText += matrix[rowB * 5 + (colB + 4) % 5];
      } else if (colA === colB) {
        decryptedText += matrix[((rowA + 4) % 5) * 5 + colA];
        decryptedText += matrix[((rowB + 4) % 5) * 5 + colB];
      } else {
        decryptedText += matrix[rowA * 5 + colB];
        decryptedText += matrix[rowB * 5 + colA];
      }
    }

    return decryptedText;
  };

  return (
    <CipherMethod
      title="PlayFair Cipher"
      encryptFunction={encryptPlayfair}
      decryptFunction={decryptPlayfair}
    />
  );
};

export default PlayFair;
