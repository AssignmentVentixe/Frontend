import { Route, Routes } from "react-router-dom";
import "./css/base.css";
import BaseLayout from "./assets/layouts/BaseLayout";
import AuthLayout from "./assets/layouts/AuthLayout";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";
import Events from "./assets/pages/Events";
import EventDetails from "./assets/pages/EventDetails";
import Bookings from "./assets/pages/Bookings";
import BookingDetails from "./assets/pages/BookingDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/events" element={<Events />} />
        <Route path="/events/event-details/:id" element={<EventDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/booking-details/:id" element={<BookingDetails />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;