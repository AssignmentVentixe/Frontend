import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/FormatDate";
import eventApi from "../../services/eventApi";
import TermsList from "../components/TermsList";
import BuyTicketModal from "../components/BuyTicketModal";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    eventApi
      .get(`/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!event) return <span>404 - Event not found</span>;

  const formattedPrice =
    event.price % 1 === 0 ? event.price.toString() : event.price.toFixed(2);

  return (
    <div className="eventDetailsPage">
      <div className="eventDetails">
        <div className="imageContainer">
          <img className="eventImg" src={event.imageUrl} alt="" />
        </div>
        <div className="eventInformationContainer">
          <div className="eventInformationHeader">
            <h2>{event.eventName}</h2>
            <span className="eventLocation">{event.location}</span>
            <span className="eventDate">{formatDate(event.startDate)}</span>
          </div>

          <div className="priceContainer">
            <button
              className="btn bookEventBtn"
              onClick={() => setIsModalOpen(true)}
            >
              Buy ticket
            </button>
            <span className="eventPrice">{formattedPrice}</span>
          </div>

          <div className="descriptionContainer">
            <h4>About Event</h4>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
      <div className="termsListContainer">
        <TermsList />
      </div>

      <BuyTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventName={event.eventName}
        location={event.location}
        date={formatDate(event.startDate)}
        price={formattedPrice}
        eventId={id}
      />
    </div>
  );
};

export default EventDetails;
