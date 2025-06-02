import React, { useContext, useState } from "react";
import { ConsentContext } from "../context/ConsentContext";
import { Link } from "react-router-dom";

export const CookieModal = () => {
  const { consent, setConsent, showModal, setShowModal } =
    useContext(ConsentContext);
  const [localSettings, setLocalSettings] = useState(consent);

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

  const handleAcceptAll = async () => {
    const allConsent = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setConsent(allConsent);
    setShowModal(false);
    await postConsent(allConsent);
  };

  const handleSaveSelected = async () => {
    const chosen = { ...localSettings, essential: true };
    setConsent(chosen);
    setShowModal(false);
    await postConsent(chosen);
  };

  if (!showModal) return null;

  return (
    <div id="cookieModal" className="cookie-modal">
      <div className="cookie-card">
        <div className="cookie-content">
          <h3>You're in control of your data</h3>
          <p>
            We and our partners use technologies, including cookies, to collect
            information about you for various purposes such as personalizing
            content and ads, analyzing our traffic, and providing social media
            features.
          </p>
          <p>
            By clicking “Accept All” you consent to all purposes. You can also
            select specific purposes by toggling the switches below and clicking
            “Save Selected”.
          </p>
          <p>
            You can withdraw your consent at any time by clicking the cookie
            icon at the bottom left of the page to reopen this dialog.
          </p>
          <p>
            <Link
              className="cookie-link"
              to="https://cookieinformation.com/sv/resurser/blog-sv/digital-service-act-cookie-popup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn more here</span>
            </Link>
          </p>
        </div>

        <form className="cookie-settings" onSubmit={(e) => e.preventDefault()}>
          <h4>Cookie Preferences</h4>
          <div className="options">
            <div className="option">
              <label className="switch-label" htmlFor="cookie-necessary">
                Necessary (Always active)
              </label>
              <label className="switch">
                <input
                  type="checkbox"
                  id="cookie-necessary"
                  checked={true}
                  disabled
                />
                <span className="slider round" />
              </label>
            </div>

            {["functional", "analytics", "marketing"].map((key) => (
              <div className="option" key={key}>
                <label className="switch-label" htmlFor={`cookie-${key}`}>
                  {
                    {
                      functional: "Functional",
                      analytics: "Analytics & Statistics",
                      marketing: "Marketing",
                    }[key]
                  }
                </label>
                <label className="switch">
                  <input
                    type="checkbox"
                    id={`cookie-${key}`}
                    checked={localSettings[key]}
                    onChange={() =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        [key]: !prev[key],
                      }))
                    }
                  />
                  <span className="slider round" />
                </label>
              </div>
            ))}
          </div>

          <div className="buttons">
            <button
              type="button"
              className="cookie-btn cookie-all"
              onClick={handleAcceptAll}
            >
              <span>Accept All</span>
            </button>
            <button
              type="button"
              className="cookie-btn cookie-selected"
              onClick={handleSaveSelected}
            >
              <span>Save Selected</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CookieModal;
