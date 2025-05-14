import React, { createContext, useState } from 'react';

export const HamburgerContext = createContext();

export const HamburgerProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandedNav = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <HamburgerContext.Provider value={{ isExpanded, toggleExpandedNav }}>
      {children}
    </HamburgerContext.Provider>
  );
};