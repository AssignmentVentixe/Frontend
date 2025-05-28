import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/FormatDate";

const EventCard = ({ id, imageUrl, eventName, location, startDate, price }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/events/event-details/${id}`);
  };

  const formattedPrice = price % 1 === 0 ? price.toString() : price.toFixed(2);

  return (
    <div className="eventCard" onClick={goToDetails}>
      <div className="imageContainerCard">
        <img className="cardEventImg" src={imageUrl} alt="Event Image" />
      </div>
      <span className="eventDate">{formatDate(startDate)}</span>
      <h3>{eventName}</h3>
      <span className="eventLocation">{location}</span>
      <span className="eventPrice">{formattedPrice}</span>
    </div>
  );
};

export default EventCard;
