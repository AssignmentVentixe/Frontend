import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/FormatDate";
import SearchBar from "../components/SearchBar";
import bookingApi from "../../services/bookingApi";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await bookingApi.get("/bookings");

        if (response.status < 200 || response.status >= 300) {
          navigate("/login");
          return;
        }

        const data = response.data;
        setBookings(data);
      } catch {
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [navigate]);

  const filteredBookings = bookings.filter((booking) => {
    const searchString = [
      booking.event.eventName,
      formatDate(booking.event.startDate),
    ]
      .join(" ")
      .toLowerCase();
    return searchString.includes(searchTerm.trim().toLowerCase());
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bookings-container">
      <div className="topBar">
        <SearchBar
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search bookings..."
        />
      </div>
      <div className="tableContainer">
        <table>
          <caption className="visuallyHidden">Bookings Table</caption>
          <thead>
            <tr>
              <th scope="col">Event</th>
              <th scope="col">Event Date</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.event.eventName}</td>
                <td>{formatDate(booking.event.startDate)}</td>
                <td>${booking.event.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
