import React from 'react';
import CipherMethod from './CipherMethod';

const RailFenceCipher = () => {
  const encryptRailFence = (text, numRails) => {
    if (numRails <= 1) return text;

    let rail = Array.from({ length: numRails }, () => []);
    let railIndex = 0;
    let direction = 1;

    for (let i = 0; i < text.length; i++) {
      rail[railIndex].push(text[i]);
      railIndex += direction;

      if (railIndex === 0 || railIndex === numRails - 1) {
        direction *= -1;
      }
    }

    return rail.flat().join('');
  };

  const decryptRailFence = (text, numRails) => {
    if (numRails <= 1) return text;

    let rail = Array.from({ length: numRails }, () => []);
    let railIndex = 0;
    let direction = 1;
    let pattern = [];

    for (let i = 0; i < text.length; i++) {
      pattern.push(railIndex);
      railIndex += direction;

      if (railIndex === 0 || railIndex === numRails - 1) {
        direction *= -1;
      }
    }

    let index = 0;
    for (let r = 0; r < numRails; r++) {
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === r) {
          rail[r].push(text[index]);
          index++;
        }
      }
    }

    railIndex = 0;
    direction = 1;
    const result = [];

    for (let i = 0; i < text.length; i++) {
      result.push(rail[railIndex].shift());
      railIndex += direction;

      if (railIndex === 0 || railIndex === numRails - 1) {
        direction *= -1;
      }
    }

    return result.join('');
  };

  return (
    <CipherMethod
      title="Rail Fence Cipher"
      encryptFunction={encryptRailFence}
      decryptFunction={decryptRailFence}
    />
  );
};

export default RailFenceCipher;
