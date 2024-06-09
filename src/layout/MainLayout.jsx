import React, { useState } from 'react';
import CaesarCipher from '../components/Caesar'; // Make sure this path is correct
import OneTimePad from '../components/OneTimePad'; // Make sure this path is correct
import VigenereCipher from '../components/Vigenere'; // Make sure this path is correct
import RailFenceCipher from '../components/RailFenceCipher'; // Make sure this path is correct
import PlayfairCipher from '../components/PlayFair'; // Make sure this path is correct

const MainLayout = () => {
  const [selectedCipher, setSelectedCipher] = useState('Caesar');

  const renderCipherComponent = () => {
    switch (selectedCipher) {
      case 'Caesar':
        return <CaesarCipher />;
      case 'OneTimePad':
        return <OneTimePad />;
      case 'Vigenere':
        return <VigenereCipher />;
      case 'RailFence':
        return <RailFenceCipher />;
      case 'Playfair':
        return <PlayfairCipher />;
      default:
        return <CaesarCipher />;
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Cipher Methods</h1>
      <div className="mb-4">
        <label className="block mb-2">Select Cipher Method</label>
        <select
          className="border border-gray-300 p-2 w-full"
          value={selectedCipher}
          onChange={(e) => setSelectedCipher(e.target.value)}
        >
          <option value="Caesar">Caesar Cipher</option>
          <option value="OneTimePad">One-Time Pad Cipher</option>
          <option value="Vigenere">Vigenère Cipher</option>
          <option value="RailFence">Rail Fence Cipher</option>
          <option value="Playfair">Playfair Cipher</option>
        </select>
      </div>
      <div className="w-full flex justify-center">
        {renderCipherComponent()}
      </div>
    </div>
  );
};

export default MainLayout;
