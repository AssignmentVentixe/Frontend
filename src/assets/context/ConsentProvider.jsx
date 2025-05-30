import React, { useState, useEffect } from "react";
import { ConsentContext } from "./ConsentContext";

export const ConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(() => {
    const saved = localStorage.getItem("cookieConsent");
    return saved
      ? JSON.parse(saved)
      : {
          essential: true,
          functional: false,
          analytics: false,
          marketing: false,
        };
  });

  const [showModal, setShowModal] = useState(
    () => !localStorage.getItem("cookieConsent")
  );

  useEffect(() => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
  }, [consent]);

  return (
    <ConsentContext.Provider
      value={{ consent, setConsent, showModal, setShowModal }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export default ConsentProvider;
