import React, { useState } from "react";
import { HamburgerContext } from "./HamburgerContext";

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
