import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import validateEmail from "../../common/EmailValidation";
import bookingApi from "../../services/bookingApi";
import { useToast } from "../context/ToastContext";

const BuyTicketModal = ({
  isOpen,
  onClose,
  eventId,
  eventName,
  location,
  date,
  price,
}) => {
  const { user } = useContext(AuthContext);
  const showToast = useToast();

  const [email, setEmail] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [touched, setTouched] = useState({ email: false, checkbox: false });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (isOpen) document.body.classList.add("modalOpen");
    else document.body.classList.remove("modalOpen");
    return () => {
      document.body.classList.remove("modalOpen");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, checkbox: true });

    if (!validateEmail(email) || !isConfirmed) {
      return;
    }

    setLoading(true);
    try {
      await bookingApi.post("/bookings", {
        bookingEmail: email,
        eventId: eventId,
        eventName: eventName,
        eventLocation: location,
        eventDate: date,
        eventPrice: price,
      });
      showToast({ message: "Booking successful!", type: "success" });
      onClose();
    } catch {
      showToast({
        message:
          "An unexpected error occurred while attempting to book, please try again",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h3>Buy Ticket</h3>
          <button className="btnClose" type="button" onClick={onClose} />
        </div>

        <div className="eventInformation">
          <h4>{eventName}</h4>
          <span className="eventDate">{date}</span>
          <span className="eventLocation">{location}</span>
          <span className="eventPrice">{price}</span>
        </div>

        <form className="modalForm" onSubmit={handleSubmit} noValidate>
          <div className="formGroup">
            <label htmlFor="emailInput" className="formLabel">
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              className="signInput"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setTouched((t) => ({ ...t, email: true }));
              }}
              required
            />
            {touched.email && !validateEmail(email) && (
              <div className="errorMessage">Invalid email address.</div>
            )}
          </div>

          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={() => {
                setIsConfirmed((c) => !c);
                setTouched((t) => ({ ...t, checkbox: true }));
              }}
            />
            <span className="custom-checkbox"></span>
            <span className="textSpan">Payment complete</span>
          </label>
          {touched.checkbox && !isConfirmed && (
            <div className="errorMessage">You must confirm payment.</div>
          )}

          <button
            className="btn formSubmit"
            type="submit"
            disabled={loading || !validateEmail(email) || !isConfirmed}
          >
            {loading ? "Booking..." : "Confirm booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

BuyTicketModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  eventId: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BuyTicketModal;
