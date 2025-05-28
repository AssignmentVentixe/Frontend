import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/FormatDate";
import SearchBar from "../components/SearchBar";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://localhost:7101/api/bookings", {
          credentials: "include",
        });

        if (!response.ok) {
          if (response.status === 401) {
            navigate("/login");
            return;
          }
          throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
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
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search bookings..."
      />
      {filteredBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="bookings-table">
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
      )}
    </div>
  );
};

export default Bookings;
