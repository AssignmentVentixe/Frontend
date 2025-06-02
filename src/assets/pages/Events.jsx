import React, { useState, useEffect, useRef, useCallback } from "react";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import eventApi from "../../services/eventApi";

const Events = () => {
  const BATCH_SIZE = 10;

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loaderRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    eventApi
      .get("/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filtered = events.filter((evt) => {
    const haystack = [evt.eventName, evt.location].join(" ").toLowerCase();
    return haystack.includes(searchTerm.trim().toLowerCase());
  });

  const visibleEvents = filtered.slice(0, visibleCount);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && visibleCount < filtered.length) {
        setVisibleCount((c) => Math.min(c + BATCH_SIZE, filtered.length));
      }
    },
    [visibleCount, filtered.length]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <>
      <div className="topBar">
        <SearchBar
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(BATCH_SIZE);
          }}
          placeholder="Search event, location, etc"
        />
      </div>

      <div className="eventCardContainer">
        {isLoading ? (
          <div className="spinnerContainer">
            <span className="spinner"></span>
          </div>
        ) : visibleEvents.length > 0 ? (
          visibleEvents.map((evt) => <EventCard key={evt.id} {...evt} />)
        ) : (
          <span>No events found.</span>
        )}
      </div>

      <div ref={loaderRef} />
    </>
  );
};

export default Events;
