import React from "react";
import { Route, Routes } from "react-router-dom";
import ConsentProvider from "./assets/context/ConsentProvider";
import CookieModal from "./assets/components/CookieModal";
import CookieIcon from "./assets/components/CookieIcon";
import BaseLayout from "./assets/layouts/BaseLayout";
import CenterLayout from "./assets/layouts/CenterLayout";
import Login from "./assets/pages/LogIn";
import Events from "./assets/pages/Events";
import EventDetails from "./assets/pages/EventDetails";
import Bookings from "./assets/pages/Bookings";
import "./css/base.css";
import PrivacyPolicy from "./assets/pages/PrivacyPolicy";
import TermAndConditions from "./assets/pages/TermAndConditions";
import Contact from "./assets/pages/Contact";
import RegisterLayout from "./assets/layouts/RegisterLayout";
import RequestRegistration from "./assets/pages/RequestRegistration";
import EnterEmailVerification from "./assets/pages/EnterEmailVerification";
import CompleteRegistration from "./assets/pages/CompleteRegistration";

export const App = () => {
  return (
    <ConsentProvider>
      <CookieModal />
      <CookieIcon />

      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Events />} />
          <Route path="events" element={<Events />} />
          <Route path="events/event-details/:id" element={<EventDetails />} />
          <Route path="bookings" element={<Bookings />} />

          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="term-and-conditions" element={<TermAndConditions />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route element={<CenterLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/register" element={<RegisterLayout />}>
          <Route index element={<RequestRegistration />} />
          <Route path="verify" element={<EnterEmailVerification />} />
          <Route path="complete" element={<CompleteRegistration />} />
        </Route>
      </Routes>
    </ConsentProvider>
  );
};

export default App;
