import React, { useContext } from "react";
import { ConsentContext } from "../context/ConsentContext";

export const CookieIcon = () => {
  const { setShowModal } = useContext(ConsentContext);

  return (
    <div className="cookieConsentIcon" onClick={() => setShowModal(true)}>
      <i className="fa-solid fa-cookie-bite" aria-hidden="true"></i>
      <span className="visuallyHidden">Cookie settings</span>
    </div>
  );
};

export default CookieIcon;
