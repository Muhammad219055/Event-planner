import React, { createContext, useState, useCallback } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = useCallback((event) => {
    setEvents((prevEvents) =>
      [...prevEvents, event].sort((a, b) => a.dateTime - b.dateTime)
    );
  }, []);

  const deleteEvent = useCallback((id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  }, []);

  const editEvent = useCallback((updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  }, []);

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent, editEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
