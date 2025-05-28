import React, { useState, useEffect } from "react";
import { getCookie, setCookie } from "../../utils/CookieUtils";
import { ConsentContext } from "./ConsentContext";

export const ConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(() => {
    const saved = getCookie("cookieConsent");
    return saved
      ? JSON.parse(saved)
      : {
          essential: true,
          functional: false,
          analytics: false,
          marketing: false,
        };
  });

  const [showModal, setShowModal] = useState(() => !getCookie("cookieConsent"));

  useEffect(() => {
    setCookie("cookieConsent", JSON.stringify(consent), 90);
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
  }, [consent]);

  const postConsent = async (body) => {
    try {
      await fetch("/cookies/setcookies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error("Error posting cookie consent:", err);
    }
  };

  useEffect(() => {
    postConsent(consent);
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
