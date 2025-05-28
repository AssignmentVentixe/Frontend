import React from "react";
import { Route, Routes } from "react-router-dom";
import ConsentProvider from "./assets/context/ConsentProvider";
import CookieModal from "./assets/components/CookieModal";
import CookieIcon from "./assets/components/CookieIcon";
import BaseLayout from "./assets/layouts/BaseLayout";
import CenterLayout from "./assets/layouts/CenterLayout";
import Login from "./assets/pages/LogIn";
import Register from "./assets/pages/Register";
import Events from "./assets/pages/Events";
import EventDetails from "./assets/pages/EventDetails";
import Bookings from "./assets/pages/Bookings";
import BookingDetails from "./assets/pages/BookingDetails";
import "./css/base.css";
import PrivacyPolicy from "./assets/pages/PrivacyPolicy";
import TermAndConditions from "./assets/pages/TermAndConditions";
import Contact from "./assets/pages/Contact";

export const App = () => {
  return (
    <ConsentProvider>
      <CookieModal />
      <CookieIcon />

      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="events" element={<Events />} />
          <Route path="events/event-details/:id" element={<EventDetails />} />
          <Route path="bookings" element={<Bookings />} />
          <Route
            path="bookings/booking-details/:id"
            element={<BookingDetails />}
          />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="term-and-conditions" element={<TermAndConditions />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route element={<CenterLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </ConsentProvider>
  );
};

export default App;
