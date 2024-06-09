import React, { useState } from 'react';

const CipherMethod = ({ title, encryptFunction, decryptFunction, showKeyInput = true }) => {
  const [plainText, setPlainText] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [operation, setOperation] = useState('encrypt');

  const handleProcess = () => {
    if (operation === 'decrypt') {
      const decryptedText = decryptFunction(plainText, key);
      setOutput(decryptedText);
    } else {
      const encryptedText = encryptFunction(plainText, key);
      setOutput(encryptedText);
    }
  };

  return (
    <div className="h-auto flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <label className="block mb-2">Enter Plain Text</label>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full mb-4"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
        />
        {showKeyInput && (
          <>
            <label className="block mb-2">Enter Key</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mb-4"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </>
        )}
        <label className="block mb-2">Select Operation</label>
        <select
          className="border border-gray-300 p-2 w-full mb-4"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="encrypt">Encrypt</option>
          <option value="decrypt">Decrypt</option>
        </select>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleProcess}
          >
            Process
          </button>
        </div>
        <div className="mt-4">
          <label className="block mb-2">
            {operation === 'decrypt' ? 'Decrypted Text' : 'Encrypted Text'}
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            value={output}
            readOnly
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CipherMethod;
