import React, { useState, useEffect, useRef, useCallback } from "react";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";

const Events = () => {
  const BATCH_SIZE = 10;

  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetch("https://localhost:7122/api/events")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
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
        {visibleEvents.length > 0 ? (
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
