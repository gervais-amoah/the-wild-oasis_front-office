'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your context
interface ClickContextType {
  clickCount: number;
  incrementClick: () => void;
}

// Create the context with an initial value of `undefined`
const ClickContext = createContext<ClickContextType | undefined>(undefined);

// Create the provider component
export const ClickProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClick = () => setClickCount((prevCount) => prevCount + 1);

  return (
    <ClickContext.Provider value={{ clickCount, incrementClick }}>
      {children}
    </ClickContext.Provider>
  );
};

// Custom hook to use the context
export const useClickContext = (): ClickContextType => {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error('useClickContext must be used within a ClickProvider');
  }
  return context;
};
