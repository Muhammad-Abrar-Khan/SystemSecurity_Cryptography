import React from 'react';
import Caesar from '../components/Caesar';
import OneTimePad from '../components/OneTimePad';
import PlayFair from '../components/PlayFair';
import RailFenceCipher from '../components/RailFenceCipher';
import Vigenere from '../components/Vigenere';

const MainLayout = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-8">Cipher Methods</h1>
      <div className="flex flex-col items-center space-y-8">
        <Caesar />
        <OneTimePad />
        <PlayFair />
        <RailFenceCipher />
        <Vigenere />
      </div>
    </div>
  );
};

export default MainLayout;
