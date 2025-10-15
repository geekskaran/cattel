// TODO: Implement this context

import React, { createContext, useState, useContext } from 'react';

const Cattle = createContext();

export const useCattle = () => {
  const context = useContext(Cattle);
  if (!context) {
    throw new Error('useCattle must be used within CattleProvider');
  }
  return context;
};

export const CattleProvider = ({ children }) => {
  const [state, setState] = useState({});

  const value = {
    state,
    setState,
  };

  return <Cattle.Provider value={value}>{children}</Cattle.Provider>;
};
