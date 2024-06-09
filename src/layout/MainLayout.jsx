import React, { useState } from 'react';
import CaesarCipher from '../components/CaesarCipher';
import OneTimePad from '../components/OneTimePad';
import VigenereCipher from '../components/VigenereCipher';
import RailFenceCipher from '../components/RailFenceCipher';
import PlayfairCipher from '../components/PlayfairCipher';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Cipher Methods</h1>
      <div className="mb-4">
        <label className="block text-lg mb-2">Select Cipher Method</label>
        <select
          className="border border-gray-300 p-2"
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
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {renderCipherComponent()}
      </div>
    </div>
  );
};

export default MainLayout;

